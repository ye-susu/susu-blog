export const createImageLoadingDirective = () => {
  const records = new WeakMap()
  let observer = null
  let observedCount = 0

  const sourceKey = (img) =>
    ['src', 'srcset', 'sizes'].map((name) => img.getAttribute(name) || '').join('\n')

  const stopObserving = (img) => {
    const record = records.get(img)
    if (!record?.observed) return
    observer.unobserve(img)
    record.observed = false
    if (--observedCount === 0) {
      observer.disconnect()
      observer = null
    }
  }

  const observeVisibility = (img) => {
    const record = records.get(img)
    if (!record.mounted || record.observed) return
    if (!('IntersectionObserver' in window)) {
      img.dataset.imageVisible = 'true'
      return
    }
    observer ??= new window.IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (records.get(target)?.observed) {
          target.dataset.imageVisible = String(isIntersecting)
        }
      }
    })
    record.observed = true
    observedCount += 1
    observer.observe(img)
  }

  const setState = (img, state) => {
    if (img.dataset.imageState !== state) img.dataset.imageState = state
    const frame = img.closest('.blog-image-frame')
    if (frame) {
      if (frame.dataset.imageState !== state) frame.dataset.imageState = state
      if (state === 'error') {
        frame.setAttribute('role', 'img')
        frame.setAttribute('aria-label', `${img.getAttribute('alt') || '图片'}，加载失败`)
      } else {
        frame.removeAttribute('role')
        frame.removeAttribute('aria-label')
      }
    }
    if (state === 'pending') observeVisibility(img)
    else {
      img.dataset.imageVisible = 'false'
      stopObserving(img)
    }
  }

  const loaded = (img) => {
    // srcset 切图时浏览器可能暂时清空图片。只为封面保留已经加载的底图，
    // 不干预浏览器选图，也不在 resize 时重启加载动画。
    const frame = img.closest('.blog-image-frame--thumbnail')
    if (frame && img.currentSrc) {
      frame.style.setProperty('--blog-image-preview', `url(${JSON.stringify(img.currentSrc)})`)
    }
    setState(img, 'loaded')
  }

  const sync = (img) => {
    if (img.naturalWidth > 0) loaded(img)
    // 暂时没有像素不代表失败；已显示的图片保持原状态，等待 load/error。
  }

  const schedule = (img, failed = false) => {
    const record = records.get(img)
    window.cancelAnimationFrame(record.task)
    const selected = img.currentSrc
    record.task = window.requestAnimationFrame(() => {
      record.task = 0
      if (img.naturalWidth > 0) loaded(img)
      else if (failed && img.complete && img.currentSrc === selected) setState(img, 'error')
    })
  }

  const start = (img, record) => {
    window.cancelAnimationFrame(record.task)
    record.source = sourceKey(img)
    record.generation += 1
    img.closest('.blog-image-frame--thumbnail')?.style.removeProperty('--blog-image-preview')
    setState(img, 'pending')
    sync(img)

    // SSR 图片可能在指令挂载前已经失败，用一次解码检查补齐缓存情况。
    // decode 被新资源打断也会 reject，因此必须核对资源与生命周期。
    if (img.complete && !img.naturalWidth && img.currentSrc && img.decode) {
      const generation = record.generation
      const selected = img.currentSrc
      img.decode().then(() => {
        if (records.get(img) === record && generation === record.generation) sync(img)
      }, () => {
        if (records.get(img) === record && generation === record.generation &&
            img.currentSrc === selected) schedule(img, true)
      })
    }
  }

  return {
    getSSRProps() {
      return { 'data-image-state': 'pending', 'data-image-visible': 'false' }
    },
    beforeMount(img) {
      const record = {
        source: '', generation: 0, mounted: false, observed: false, task: 0,
        onLoad: () => { sync(img); schedule(img) },
        onError: () => schedule(img, true),
      }
      records.set(img, record)
      img.addEventListener('load', record.onLoad)
      img.addEventListener('error', record.onError)
    },
    mounted(img) {
      const record = records.get(img)
      record.mounted = true
      start(img, record)
    },
    updated(img) {
      const record = records.get(img)
      if (record.source !== sourceKey(img)) start(img, record)
      else sync(img)
    },
    beforeUnmount(img) {
      const record = records.get(img)
      stopObserving(img)
      window.cancelAnimationFrame(record.task)
      img.removeEventListener('load', record.onLoad)
      img.removeEventListener('error', record.onError)
      img.closest('.blog-image-frame--thumbnail')?.style.removeProperty('--blog-image-preview')
      records.delete(img)
    },
  }
}
