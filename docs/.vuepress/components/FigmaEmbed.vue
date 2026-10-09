<template>
  <div class="figma-container" :style="{ aspectRatio: ratio }">
    <div v-if="!isLoaded" class="figma-placeholder">
      <img :src="coverImg" :alt="props.title" :loading="props.loading" decoding="async" class="cover-image no-zoom" />
      <div class="overlay">
        <button type="button" class="play-button" :aria-label="`查看${props.title}`" @click="loadIframe">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
          <span>点击查看</span>
        </button>
      </div>
    </div>
    <iframe v-else ref="iframeRef" :src="iframeSrc" :title="props.title" tabindex="0" allowfullscreen
      class="figma-iframe"></iframe>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  iframeSrc: { type: String, required: true },
  coverImg: { type: String, required: true },
  ratio: { type: String, default: "16 / 10" },
  title: { type: String, default: "Figma 设计预览" },
  loading: { type: String, default: "lazy" },
});

const isLoaded = ref(false);
const iframeRef = ref(null);

const loadIframe = async () => {
  isLoaded.value = true;
  await nextTick();

  // 原按钮被移除后，将键盘焦点移到预览
  iframeRef.value?.focus();
};
</script>

<style scoped>
.figma-container {
  width: 100%;
  border: 1px solid var(--blog-c-card-border);
  overflow: hidden;
  position: relative;
  margin-top: 1.25rem;
}

.figma-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  border-top: 1px solid #444;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: #2c2c2c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button {
  cursor: pointer;
  font-size: 0.8125rem;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding-right: 0.5rem;
  border: 0;
  background: transparent;
  font-family: inherit;
}

.figma-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>