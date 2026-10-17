import { nextTick, watch } from 'vue';

// 等到实际绘制首帧再移除封面；两个动画共用超时、失败与清理逻辑。
export function useLottieLifecycle(player, emit, timeout) {
  watch(player, async (component, _previous, onCleanup) => {
    if (!component) return;
    emit('loading');

    let cancelled = false;
    let ready = false;
    let failed = false;
    let instance;
    let timer;

    const removeListeners = () => {
      instance?.removeEventListener('render', onRender);
      instance?.removeEventListener('loadError', onError);
      instance?.removeEventListener('renderError', onError);
    };
    const onRender = () => {
      if (cancelled || ready || failed || !instance?.isLoaded) return;
      ready = true;
      clearTimeout(timer);
      instance.removeEventListener('render', onRender);
      emit('ready');
    };
    const onError = () => {
      if (cancelled || failed) return;
      failed = true;
      clearTimeout(timer);
      removeListeners();
      emit('error');
    };

    onCleanup(() => {
      cancelled = true;
      clearTimeout(timer);
      removeListeners();
    });

    await nextTick();
    if (cancelled) return;
    instance = component.getDotLottieInstance?.();
    if (!instance) return onError();

    instance.addEventListener('render', onRender);
    instance.addEventListener('loadError', onError);
    instance.addEventListener('renderError', onError);
    timer = setTimeout(onError, timeout);
  }, { flush: 'post' });
}
