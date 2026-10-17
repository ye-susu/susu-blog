<script setup>
import { ref } from 'vue';
import { DotLottieVue } from '../utils/lottiePlayer.js';
import { useLottieLifecycle } from '../composables/useLottieLifecycle.js';

defineProps({ src: { type: String, required: true } });
const emit = defineEmits(['loading', 'ready', 'error']);
const player = ref(null);
const renderConfig = { autoResize: true };
const layout = { fit: 'contain', align: [0.5, 0.5] };

useLottieLifecycle(player, emit, 30000);
</script>

<template>
    <DotLottieVue ref="player" :src="src" :render-config="renderConfig" :layout="layout" autoplay loop
        class="updates-player" />
</template>

<style scoped>
.updates-player :deep(canvas) {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
