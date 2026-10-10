<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { RouterLink } from "vue-router";
import { formatDate } from "../utils/formatDate.js";

const experArt = useBlogType("experience");
</script>
<template>
  <div class="experArt-list">
    <div v-if="experArt.items?.length" class="experArt-wrapper">
      <RouterLink v-for="{ info, path } in experArt.items" :key="path" :to="path" :aria-label="info.title"
        class="experArt-item">
        <div class="experArt-info">
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
      </RouterLink>
    </div>
    <div v-else>Nothing in here.</div>
  </div>
</template>

<style scoped>
.experArt-list {
  display: flex;
  flex-direction: column;
}

.experArt-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  cursor: pointer;
}

.experArt-wrapper>a.experArt-item,
.experArt-wrapper>a.experArt-item:hover {
  color: inherit;
  font-weight: normal;
  text-decoration: none;
}

.experArt-item:last-child {
  padding-bottom: 0;
}

.experArt-info .date {
  color: var(--blog-c-muted);
}

.experArt-info .title {
  font-weight: bold;
  font-size: 1.5rem;
}

.experArt-info p {
  line-height: 1.75rem;
  margin: 0.63rem 0 0;
}

.experArt-info .description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* 限制最多显示 2 行 */
  overflow: hidden;
  /* 必须设置为 hidden */
  text-overflow: ellipsis;
}

@media (max-width: 720px) {
  .experArt-info .title {
    font-size: 1.25rem;
  }

  .experArt-info p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }

  .experArt-item {
    align-items: flex-start;
    padding: 1rem 0;
    flex-direction: column-reverse;
  }
}
</style>
