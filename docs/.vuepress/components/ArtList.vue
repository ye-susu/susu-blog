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
});
const blogData = useBlogType("blog");

const listShow = computed(() => {
  const listContent = blogData.value.items;
  return props.homeShow ? listContent.slice(0, 3) : listContent;
});
</script>

<template>
  <div class="atricles-list">
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
    <div v-if="listShow.length" class="articles-wrapper">
      <RouterLink v-for="({ info, path }, index) in listShow" :key="path" :to="path" :aria-label="info.title"
        class="articles-item">
        <div class="articles-info">
          <span class="title">
            {{ info.title }}
          </span>
          <p v-if="info.description" class="description">
            {{ info.description }}
          </p>

          <p v-if="info.date" class="date">
            发布于
            {{ formatDate(info.date) }}
          </p>
          <p v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
        </div>
        <div class="ariticles-hero">
          <img v-if="info.heroImage" :src="info.heroImage" :alt="info.title" :loading="index === 0 ? 'eager' : 'lazy'"
            decoding="async" class="no-zoom" />
        </div>
      </RouterLink>
    </div>
    <div v-else>Nothing in here.</div>
  </div>
</template>

<style scoped>
.list-header {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.list-title {
  border: none;
  font-size: 1.675rem;
  line-height: 2rem;
  margin: 0;
  padding: 0;
}

.atricles-list {
  display: flex;
  flex-direction: column;
}

.articles-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 0;
  cursor: pointer;
}

.articles-wrapper>a.articles-item,
.articles-wrapper>a.articles-item:hover {
  color: inherit;
  font-weight: normal;
  text-decoration: none;
}

.articles-item:last-child {
  padding-bottom: 0;
}

.ariticles-hero {
  flex-shrink: 0;
  width: 14.875rem;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  background-color: var(--blog-c-surface);
  overflow: hidden;
}

.ariticles-hero img {
  width: 100%;
}

.articles-info {
  padding-right: 2rem;
}

.articles-info .date {
  color: var(--blog-c-muted);
}

.articles-info .title {
  font-weight: bold;
  font-size: 1.5rem;
}

.articles-info p {
  line-height: 1.75rem;
  margin: 0.63rem 0 0;
}

.articles-info .description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  /* 限制最多显示 2 行 */
  overflow: hidden;
  /* 必须设置为 hidden */
  text-overflow: ellipsis;
}

@media (max-width: 720px) {
  .list-header {
    margin-bottom: 0.25rem;
  }

  .list-title {
    font-size: 1.375rem;
  }

  .more-link svg {
    width: 2.75rem;
  }

  .articles-info {
    padding: 1.125rem 0 0;
  }

  .articles-info .title {
    font-size: 1.25rem;
  }

  .articles-info p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-top: 0.5rem;
  }

  .ariticles-hero {
    border-radius: 0.75rem;
    width: 100%;
  }

  .articles-item {
    align-items: flex-start;
    padding: 0.75rem 0;
    flex-direction: column-reverse;
  }
}
</style>
