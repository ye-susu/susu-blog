<script setup>
import { nextTick, ref, watch } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

defineProps({ src: { type: String, required: true } });
const emit = defineEmits(['ready', 'error']);
const player = ref(null);
const renderConfig = { autoResize: true };
const layout = { fit: 'contain', align: [0.5, 0.5] };

watch(player, async (component, _previous, onCleanup) => {
    if (!component) return;
    let cancelled = false;
    let instance;
    let timer;
    let ready = false;
    const onRender = () => {
        if (ready || cancelled) return;
        ready = true;
        clearTimeout(timer);
        instance?.removeEventListener('render', onRender);
        emit('ready');
    };
    const onError = () => {
        if (cancelled) return;
        clearTimeout(timer);
        emit('error');
    };
    onCleanup(() => {
        cancelled = true;
        clearTimeout(timer);
        instance?.removeEventListener('render', onRender);
        instance?.removeEventListener('loadError', onError);
        instance?.removeEventListener('renderError', onError);
    });
    await nextTick();
    if (cancelled) return;
    instance = component.getDotLottieInstance?.();
    if (!instance) return onError();
    timer = setTimeout(onError, 30000);
    instance.addEventListener('render', onRender);
    instance.addEventListener('loadError', onError);
    instance.addEventListener('renderError', onError);
}, { flush: 'post' });
</script>

<template>
    <DotLottieVue ref="player" :src="src" :render-config="renderConfig" :layout="layout" autoplay loop />
</template>

<style scoped>
canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
