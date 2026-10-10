export const createImageLoadingDirective = () => {
  const records = new WeakMap()
  let observer = null
  let observedCount = 0

  const sourceKey = (img) =>
    ['src', 'srcset', 'sizes']
      .map((name) => img.getAttribute(name) || '')
      .join('\n')

  const syncFrame = (img) => {
    const frame = img.closest('.blog-image-frame')
    if (!frame) return
    const state = img.dataset.imageState
    frame.dataset.imageState = state
    if (state === 'error') {
      frame.setAttribute('role', 'img')
      frame.setAttribute('aria-label', (img.getAttribute('alt') || '图片') + '，加载失败')
    } else {
      frame.removeAttribute('role')
      frame.removeAttribute('aria-label')
    }
  }

  // 图片完成加载或被移除后，停止观察。
  const stopObserving = (img) => {
    const record = records.get(img)
    if (!record?.observed) return

    observer?.unobserve(img)
    record.observed = false
    observedCount -= 1

    if (observedCount === 0) {
      observer?.disconnect()
      observer = null
    }
  }

  const checkComplete = (img) => {
    if (!img.complete) return

    img.dataset.imageState =
      img.naturalWidth > 0 ? 'loaded' : 'error'

    img.dataset.imageVisible = 'false'
    stopObserving(img)
    syncFrame(img)
  }

  // 所有待加载图片共用一个观察器。
  const observeVisibility = (img) => {
    const record = records.get(img)

    if (
      !record ||
      record.observed ||
      img.dataset.imageState !== 'pending'
    ) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      img.dataset.imageVisible = 'true'
      return
    }

    if (!observer) {
      observer = new window.IntersectionObserver((entries) => {
        for (const entry of entries) {
          const item = records.get(entry.target)

          if (
            item?.observed &&
            entry.target.dataset.imageState === 'pending'
          ) {
            entry.target.dataset.imageVisible =
              String(entry.isIntersecting)
          }
        }
      })
    }

    record.observed = true
    observedCount += 1
    observer.observe(img)
  }

  const start = (img, record) => {
    stopObserving(img)

    record.source = sourceKey(img)
    img.dataset.imageState = 'pending'
    img.dataset.imageVisible = 'false'
    syncFrame(img)

    checkComplete(img)

    if (record.mounted) {
      observeVisibility(img)
    }
  }

  return {
    // 静态 HTML 先输出占位状态，不依赖浏览器 API。
    getSSRProps() {
      return {
        'data-image-state': 'pending',
        'data-image-visible': 'false',
      }
    },

    beforeMount(img) {
      const onComplete = () => checkComplete(img)

      const record = {
        onComplete,
        source: '',
        mounted: false,
        observed: false,
      }

      records.set(img, record)
      img.addEventListener('load', onComplete)
      img.addEventListener('error', onComplete)

      start(img, record)
    },

    mounted(img) {
      const record = records.get(img)
      if (!record) return

      record.mounted = true
      checkComplete(img)
      syncFrame(img)
      observeVisibility(img)
    },

    updated(img) {
      const record = records.get(img)

      if (record && record.source !== sourceKey(img)) {
        start(img, record)
      }
    },

    beforeUnmount(img) {
      const record = records.get(img)

      stopObserving(img)

      if (record) {
        img.removeEventListener('load', record.onComplete)
        img.removeEventListener('error', record.onComplete)
        records.delete(img)
      }
    },
  }
}
