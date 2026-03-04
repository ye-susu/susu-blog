<template>
  <div class="figma-container" :style="{ aspectRatio: ratio }">
    <div v-if="!isLoaded" class="figma-placeholder">
      <img :src="coverImg" class="cover-image no-zoom" alt="Figma Cover" />
      <div class="overlay">
        <div class="play-button" @click="loadIframe">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
          <span>点击查看</span>
        </div>
      </div>
    </div>

    <iframe
      v-else
      :src="iframeSrc"
      allowfullscreen
      class="figma-iframe"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  iframeSrc: { type: String, required: true },
  coverImg: { type: String, required: true },
  ratio: { type: String, default: "16 / 10" },
});

const isLoaded = ref(false);

const loadIframe = () => {
  isLoaded.value = true;
};
</script>

<style scoped>
.figma-container {
  width: 100%;
  border: 1px solid #e9e9eb;
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
}

.figma-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>