// 补齐主题抽屉的键盘操作，状态仍由主题 Layout 管理。
export const createSidebarAccessibilityDirective = () => {
  const records = new WeakMap();

  const sync = (root) => {
    const siteName = root.querySelector('.vp-navbar .vp-site-name');
    siteName?.closest('a')?.setAttribute('aria-label', `${siteName.textContent.trim()} 首页`);
    const button = root.querySelector('.vp-toggle-sidebar-button');
    const open = root.classList.contains('sidebar-open');
    button?.setAttribute('aria-expanded', String(open));
    button?.setAttribute('aria-label', '切换导航与文章目录');
    const drawer = records.get(root)?.drawer;
    if (drawer) {
      // 收起动画尚未结束时，也不让键盘焦点进入正在移出的抽屉。
      root.querySelector('.vp-sidebar')?.toggleAttribute('inert', drawer.matches && !open);
    }
  };

  return {
    mounted(root) {
      const drawer = window.matchMedia('(max-width: 720px)');
      const getButton = () => root.querySelector('.vp-toggle-sidebar-button');
      const returnFocus = () => getButton()?.focus({ preventScroll: true });
      const onDrawerChange = () => {
        root.removeAttribute('data-sidebar-animate');
        if (!drawer.matches && root.classList.contains('sidebar-open')) {
          getButton()?.click();
        }
        sync(root);
      };

      const enableAnimation = () => {
        if (drawer.matches) root.setAttribute('data-sidebar-animate', 'true');
      };

      const onKeydown = (event) => {
        if (event.defaultPrevented || event.target.closest('dialog[open]')) return;

        if (event.target.closest('.vp-toggle-sidebar-button') &&
            (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          if (!event.repeat) getButton()?.click();
        } else if (event.key === 'Escape' && drawer.matches &&
                   root.classList.contains('sidebar-open')) {
          event.preventDefault();
          getButton()?.click();
          returnFocus();
        }
      };

      const onClick = (event) => {
        if (event.target.closest('.vp-toggle-sidebar-button, .vp-sidebar-mask')) {
          enableAnimation();
        }
        if (event.target.classList.contains('vp-sidebar-mask')) returnFocus();

        // 同页锚点不会触发主题的 content-updated，需要主动关闭移动端抽屉。
        const link = event.target.closest('.vp-sidebar a[href]');
        if (link && drawer.matches && root.classList.contains('sidebar-open') &&
            event.button === 0 && !event.metaKey && !event.ctrlKey &&
            !event.shiftKey && !event.altKey && (!link.target || link.target === '_self')) {
          const target = new URL(link.href, window.location.href);
          if (target.origin === window.location.origin &&
              target.pathname === window.location.pathname &&
              target.search === window.location.search && target.hash) {
            enableAnimation();
            getButton()?.click();
            returnFocus();
          }
        }
      };

      root.addEventListener('keydown', onKeydown);
      root.addEventListener('click', onClick);
      root.addEventListener('touchend', enableAnimation);
      drawer.addEventListener('change', onDrawerChange);
      records.set(root, { onKeydown, onClick, enableAnimation, drawer, onDrawerChange });
      sync(root);
    },
    updated: sync,
    beforeUnmount(root) {
      const record = records.get(root);
      if (!record) return;
      root.removeEventListener('keydown', record.onKeydown);
      root.removeEventListener('click', record.onClick);
      root.removeEventListener('touchend', record.enableAnimation);
      record.drawer.removeEventListener('change', record.onDrawerChange);
      root.removeAttribute('data-sidebar-animate');
      root.querySelector('.vp-sidebar')?.removeAttribute('inert');
      records.delete(root);
    },
  };
};
