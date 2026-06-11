<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const props = defineProps({
  src: { type: String, default: "/lottie/home-hero.lottie" },
});

const wrapperRef = ref(null);
const playerRef = ref(null);
const isMobile = ref(false);
let mq;
let ro;

const playerKey = computed(() => (isMobile.value ? "mobile" : "desktop"));

const currentLayout = computed(() =>
  isMobile.value
    ? { fit: "cover", align: [0.5, 0.5] } // 移动端：铺满并裁切
    : { fit: "contain", align: [0.5, 0.5] } // PC：保持你原来的完整显示
);

const applyLayout = () => {
  const instance = playerRef.value?.getDotLottieInstance?.();
  if (!instance) return;
  instance.setLayout(currentLayout.value);
  instance.setRenderConfig?.({ autoResize: true, devicePixelRatio: window.devicePixelRatio || 1 });
};

const onMediaChange = (e) => {
  isMobile.value = e.matches; // 触发 key 变化 -> 重新挂载播放器
  requestAnimationFrame(() => applyLayout());
};

onMounted(() => {
  mq = window.matchMedia("(max-width: 720px)");
  isMobile.value = mq.matches;
  mq.addEventListener("change", onMediaChange);

  ro = new ResizeObserver(() => {
    requestAnimationFrame(() => applyLayout());
  });
  if (wrapperRef.value) ro.observe(wrapperRef.value);
});

onBeforeUnmount(() => {
  mq?.removeEventListener?.("change", onMediaChange);
  ro?.disconnect?.();
});
</script>

<template>
  <div ref="wrapperRef" class="lottie-hero" :class="{ mobile: isMobile }">
    <DotLottieVue
      :key="playerKey"
      ref="playerRef"
      :src="src"
      autoplay
      loop
      :layout="currentLayout"
      class="lottie-player"
    />
  </div>
</template>

<style scoped>
.lottie-hero {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* PC 保持原样 */
.lottie-player {
  width: 100%;
  height: 100%;
  display: block;
  transform: scale(1);
  transform-origin: center center;
}

/* 移动端放大一点，超出部分裁掉 */
.lottie-hero.mobile .lottie-player {
  transform: scale(1.1); /* 1.1~1.3 自行微调 */
}
</style>