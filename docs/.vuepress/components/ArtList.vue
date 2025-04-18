<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { usePageFrontmatter } from "vuepress/client";

const articles = useBlogType("blog");
</script>
<template>
  <div class="atricles-list">
    <div v-if="articles.items?.length" class="articles-wrapper">
      <article
        v-for="{ info, path } in articles.items"
        :key="path"
        class="articles-item"
        @click="$router.push(path)"
      >
        <div class="articles-info">
          <span class="title">
            {{ info.title }}
          </span>
          <p v-if="info.description" class="description">
            {{ info.description }}
          </p>

          <p v-if="info.date" class="date">
            发布于
            {{
              new Date(info.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
          <p v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
        </div>
        <div class="ariticles-hero">
          <img
            v-if="info.heroImage"
            :src="info.heroImage"
            alt="heroImage"
            class="no-zoom"
          />
        </div>
      </article>
    </div>
    <div v-else>Nothing in here.</div>
  </div>
</template>

<style scoped>
.atricles-list {
  display: flex;
  flex-direction: column;
}

.articles-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
  cursor: pointer;
}
.ariticles-hero {
  flex-shrink: 0;
  width: 15rem;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  background-color: #f6f6f6;
  overflow: hidden;
}
.articles-info {
  padding-right: 2rem;
}
.articles-info .date {
  color: #6e6e75;
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
  -webkit-line-clamp: 2; /* 限制最多显示 2 行 */
  overflow: hidden; /* 必须设置为 hidden */
  text-overflow: ellipsis;
}
@media (max-width: 720px) {
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
    width: 100%;
  }
  .articles-item {
    align-items: flex-start;
    margin-top: 1.5rem;
    flex-direction: column-reverse;
  }
}
</style>
