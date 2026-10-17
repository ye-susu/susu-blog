<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { formatDate } from "../utils/formatDate.js";

const props = defineProps({
  type: {
    type: String,
    default: "blog",
    validator: (value) => ["blog", "experience"].includes(value),
  },
  limit: {
    type: Number,
    default: 0,
    validator: (value) => Number.isInteger(value) && value >= 0,
  },
  titleTag: {
    type: String,
    default: "h2",
    validator: (value) => ["h2", "h3"].includes(value),
  },
});

const sources = {
  blog: useBlogType("blog"),
  experience: useBlogType("experience"),
};

const listShow = computed(() => {
  const items = sources[props.type]?.value.items ?? [];
  const visibleItems = props.limit > 0 ? items.slice(0, props.limit) : items;

  return visibleItems.map((item) => ({
    ...item,
    displayDate: formatDate(item.info.date),
  }));
});
</script>

<template>
  <div class="content-list">
    <RouterLink v-for="({ info, path, displayDate }, index) in listShow" :key="path" :to="path"
      :aria-label="info.title" class="content-item" :class="{ 'has-cover': Boolean(info.heroImage) }">
      <div class="content-info">
        <component :is="titleTag" class="title">{{ info.title }}</component>
        <p v-if="info.description" class="description">{{ info.description }}</p>
        <p v-if="displayDate" class="date">发布于 {{ displayDate }}</p>
        <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt"></div>
      </div>
      <div v-if="info.heroImage" class="content-cover blog-image-frame blog-image-frame--thumbnail">
        <img v-image-loading :src="info.heroImage" :srcset="info.heroImageSrcset || undefined"
          :sizes="info.heroImageSrcset ? '(max-width: 720px) calc(100vw - 2.5rem), 14.875rem' : undefined"
          :alt="info.title" :loading="index === 0 ? 'eager' : 'lazy'" decoding="async" class="no-zoom" />
      </div>
    </RouterLink>
    <div v-if="!listShow.length">Nothing in here.</div>
  </div>
</template>

<style scoped>
.content-list {
  display: flex;
  flex-direction: column;
}

.content-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
}

.content-list > .content-item,
.content-list > .content-item:hover {
  color: inherit;
  font-weight: normal;
  text-decoration: none;
}

.content-item.has-cover {
  padding: 1.125rem 0;
}

.content-item:last-child {
  padding-bottom: 0;
}

.content-info {
  min-width: 0;
}

.has-cover > .content-info {
  padding-right: 2rem;
}

.content-item:not(.has-cover) > .content-info {
  width: 100%;
}

.content-info > .title {
  display: inline;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: normal;
}

.date {
  color: var(--blog-c-muted);
}

/* 避免主题“首个标题后的段落”规则覆盖列表间距。 */
.content-info > .description,
.content-info > .date,
.content-info > .excerpt {
  line-height: 1.75rem;
  margin: 0.63rem 0 0;
}

.excerpt :deep(p) {
  margin: 0;
  font-size: inherit;
  line-height: inherit;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-cover {
  flex-shrink: 0;
  width: 14.875rem;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  background-color: var(--blog-c-surface);
  overflow: hidden;
}

@media (hover: hover) and (pointer: fine) {
  .content-info:hover > .title,
  .content-info:hover > .description {
    color: var(--blog-c-icon-hover);
  }
}

@media (max-width: 720px) {
  .content-item {
    align-items: flex-start;
    flex-direction: column-reverse;
    padding: 1rem 0;
  }

  .content-item.has-cover {
    padding: 0.75rem 0;
  }

  .content-item:last-child {
    padding-bottom: 0;
  }

  .has-cover > .content-info {
    padding: 1.125rem 0 0;
  }

  .content-info > .title {
    font-size: 1.25rem;
  }

  .content-info > .description,
  .content-info > .date,
  .content-info > .excerpt {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }

  .has-cover > .content-info > .description,
  .has-cover > .content-info > .date,
  .has-cover > .content-info > .excerpt {
    line-height: 1.375rem;
  }

  .content-cover {
    width: 100%;
    border-radius: 0.75rem;
  }
}
</style>
