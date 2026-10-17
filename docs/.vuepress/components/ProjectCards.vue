<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { formatDate } from "../utils/formatDate.js";

const props = defineProps({
  homeShow: {
    type: Boolean,
    default: false,
  },
});
const projects = useBlogType("projects");
const listShow = computed(() => {
  const listContent = projects.value.items;
  return props.homeShow ? listContent.slice(0, 2) : listContent;
});
</script>
<template>
  <div class="projects-container">
    <div v-if="listShow.length" class="projects-item">
      <RouterLink v-for="({ info, path }, index) in listShow" :key="path" :to="path" :aria-label="info.title"
        class="projects">
        <div class="projects-heroimage blog-image-frame blog-image-frame--thumbnail">
          <img v-if="info.heroImage" v-image-loading :src="info.heroImage" :srcset="info.heroImageSrcset || undefined"
            :sizes="info.heroImageSrcset
              ? '(max-width: 720px) calc(100vw - 2.5rem), (max-width: 50rem) calc(50vw - 2rem), 23rem'
              : undefined" :alt="info.title" :loading="!homeShow && index < 2 ? 'eager' : 'lazy'" decoding="async"
            class="no-zoom" />
        </div>
        <div class="projects-info">
          <component :is="homeShow ? 'h3' : 'h2'" class="title">
            {{ info.title }}
          </component>
          <p v-if="info.date" class="date">
            发布于
            {{ formatDate(info.date) }}
          </p>
        </div>
      </RouterLink>
    </div>
    <div v-else>Nothing in here.</div>
  </div>
</template>

<style scoped>
.projects-container {
  box-sizing: border-box;
  max-width: 47.5rem;
}

.projects-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
}

.projects-item .projects {
  position: relative;
  cursor: pointer;
  padding-top: 1.5rem;
}

.projects-info {
  position: absolute;
  top: 2.25rem;
  left: 2rem;
  right: 2rem;
  z-index: 1;
  color: rgb(60 60 67)
}

.projects-info .title,
.projects-info .date {
  margin-block-start: 0;
  margin-block-end: 0;
}

.projects-info .title {
  font-size: 1.375rem;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.4rem;
  padding: 0;
  border: 0;
}

.projects-info .date {
  font-size: 0.9375rem;
  line-height: 1.75rem;
  margin-top: 0.6rem;
  color: #6e6e75;
}

.projects-heroimage {
  overflow: hidden;
  border-radius: 0.75rem;
  aspect-ratio: 23 / 29;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to bottom, #f0f0f0, rgba(240, 240, 240, 0));
  background-repeat: no-repeat;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border: 1px solid transparent;
}

:global(html[data-theme="dark"] .projects-heroimage) {
  background-image: none;
}

.projects-heroimage img {
  transition: transform 0.2s ease-in-out;
}

.projects-heroimage img:hover {
  transform: scale(1.05);
}

@media (max-width: 720px) {
  .projects-heroimage img:hover {
    transform: scale(1);
  }

  .projects-item .projects {
    padding: 0.75rem 0 0.5rem;
  }

  .projects-item {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .projects-info {
    top: 1.25rem;
    left: 1.75rem;
    right: 1.75rem;
  }

  .projects-info .date {
    margin-top: 0.5rem;
  }
}
</style>
