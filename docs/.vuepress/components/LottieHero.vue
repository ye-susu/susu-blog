<script setup>
import { ref } from "vue";
import { DotLottieVue } from "../utils/lottiePlayer.js";
import { useLottieLifecycle } from "../composables/useLottieLifecycle.js";

defineProps({
  src: { type: String, default: "/lottie/home-hero.lottie" },
});

const playerRef = ref(null);
const emit = defineEmits(["loading", "ready", "error"]);
const renderConfig = { autoResize: true };
const layout = { fit: "contain", align: [0.5, 0.5] };

useLottieLifecycle(playerRef, emit, 15000);
</script>

<template>
  <div class="lottie-hero">
    <DotLottieVue ref="playerRef" :src="src" autoplay loop :layout="layout"
      :render-config="renderConfig" class="lottie-player" />
  </div>
</template>

<style scoped>
.lottie-hero {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.lottie-player {
  position: absolute;
  top: 50%;
  left: 50%;
  /* 素材原始尺寸为 760 × 400，缩放期间也保持画布比例。 */
  aspect-ratio: 760 / 400;
  width: auto;
  height: 100%;
  display: block;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.lottie-player :deep(canvas) {
  display: block;
}

@media (max-width: 45rem) {
  .lottie-player {
    transform: translate(-50%, -50%) scale(1.1);
  }
}
</style>
