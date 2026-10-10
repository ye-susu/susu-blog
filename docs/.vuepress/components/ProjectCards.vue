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
  listTitle: {
    type: String,
    default: "",
  },
  moreLink: {
    type: String,
    default: "",
  },
  paddingShow: {
    type: Boolean,
    default: true,
  },
  scene: {
    type: String,
    default: "default",
  },
});
const projects = useBlogType("projects");
const listShow = computed(() => {
  const listContent = projects.value.items;
  return props.homeShow ? listContent.slice(0, 2) : listContent;
});
</script>
<template>
  <div :class="[
    'projects-container',
    { 'with-padding': props.paddingShow },
    `scene-${props.scene}`,
  ]">
    <div v-if="listTitle || moreLink" class="list-header">
      <h2 class="list-title">{{ listTitle }}</h2>
      <RouterLink v-if="moreLink" :to="moreLink" class="more-link" aria-label="查看更多">
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" focusable="false">
          <path
            d="M15 4.5H33C40.4559 4.5 46.5 10.5441 46.5 18C46.5 25.4559 40.4559 31.5 33 31.5H15C7.54415 31.5 1.5 25.4559 1.5 18C1.5 10.5441 7.54415 4.5 15 4.5Z"
            stroke="var(--blog-c-divider)" />
          <path d="M13 18H31" stroke="currentColor" stroke-width="2" />
          <path d="M34 18C30.6863 18 28 15.3137 28 12" stroke="currentColor" stroke-width="2" />
          <path d="M34 18C30.6863 18 28 20.6863 28 24" stroke="currentColor" stroke-width="2" />
        </svg>
      </RouterLink>
    </div>
    <div v-if="listShow.length" class="projects-item">
      <RouterLink v-for="({ info, path }, index) in listShow" :key="path" :to="path" :aria-label="info.title"
        class="projects">
        <div class="projects-heroimage blog-image-frame blog-image-frame--thumbnail">
          <img v-if="info.heroImage" v-image-loading :src="info.heroImage" :alt="info.title"
            :loading="!homeShow && index < 2 ? 'eager' : 'lazy'" decoding="async" class="no-zoom" />
        </div>
        <div class="projects-info">
          <h1 class="title">
            {{ info.title }}
          </h1>
          <p v-if="info.date" class="date">
            发布于
            {{ formatDate(info.date) }}
          </p>
        </div>
      </RouterLink>
    </div>
    <div v-else>Nothing in here.</div>
    <slot />
  </div>
</template>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 0.25rem
}

.list-title {
  border: none;
  font-size: 1.675rem;
  margin: 0;
  padding: 0;
}

.projects-container {
  box-sizing: border-box;
  max-width: 47.5rem;
  margin: 4.5rem auto 2rem;
}

.projects-container.with-padding {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  max-width: 50rem;
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
  line-height: normal;
  margin-top: 1.4rem;
  padding: 0;
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

.projects-heroimage img {
  transition: transform 0.2s ease-in-out;
}

.projects-heroimage img:hover {
  transform: scale(1.05);
}

@media (max-width: 720px) {
  .projects-container {
    margin: 4rem 0 1.25rem;
  }

  .scene-home {
    margin-top: 2.5rem;
  }

  .list-header {
    margin-top: 3rem;
  }

  .list-title {
    font-size: 1.375rem;
  }

  .more-link svg {
    width: 2.75rem;
  }

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