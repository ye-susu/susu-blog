<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { usePageFrontmatter } from "vuepress/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

const articles = useBlogType("articles");
</script>
<template>
  <ParentLayout>
    <template #page>
      <div class="atricles-container">
        <header class="atricles-title">
          <div class="title">
            <span>设计经验</span>
            <div class="divider"></div>
            <span>知识沉淀</span>
            <div class="divider"></div>
            <span>分享文稿</span>
          </div>
        </header>
        <div v-if="articles.items?.length" class="articles-wrapper">
          <article
            v-for="{ info, path } in articles.items"
            :key="path"
            class="articles-item"
            @click="$router.push(path)"
          >
            <div class="articles-info">
              <h1 class="title">
                {{ info.title }}
              </h1>
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
              />
            </div>
          </article>
        </div>
        <div v-else>Nothing in here.</div>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.atricles-container {
  display: flex;
  flex-direction: column;
  padding: 6rem 2.5rem 2.5rem;
  box-sizing: border-box;
  max-width: 52.5rem;
  width: 100%;
  margin: 0 auto;
}
.atricles-title img {
  width: 23.875rem;
  height: 10rem;
  margin: 1rem 0;
}
.atricles-title .title {
  display: flex;
  align-items: center;
}
.atricles-title span {
  font-size: 1.25rem;
  padding: 0 1.13rem;
}
.atricles-title span:first-child {
  padding-left: 0;
}
.atricles-title span:last-child {
  padding-right: 0;
}
.atricles-title .divider {
  background-color: #dbdbdb;
  width: 0.0625rem;
  height: 1.125rem;
}
.articles-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  cursor: pointer;
}
.ariticles-hero {
  flex-shrink: 0;
  width: 15rem;
  height: 8.4375rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.ariticles-hero img {
  width: 100%;
  object-fit: cover;
  display: block;
}
.articles-info {
  padding-right: 2rem;
}
.articles-info .date {
  color: #6e6e75;
}
.articles-info h1 {
  font-size: 1.5rem;
  margin: 0;
  line-height: normal;
}
.articles-info p {
  line-height: 1.75rem;
  margin: 0.63rem 0 0;
}
.articles-info .description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制最多显示 2 行 */
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word; /* 防止长单词超出 */
}
@media (max-width: 768px) {
  .atricles-container {
    padding: 2rem 1.25rem 1.25rem;
  }
  .atricles-title .divider {
    height: 0.75rem;
  }
  .atricles-title span {
    font-size: 0.9375rem;
    padding: 0 0.75rem;
  }
  .atricles-title img {
    margin-bottom: 0.75rem;
    width: 16.875rem;
    height: 7.0625rem;
  }
  .articles-info {
    padding: 0;
  }
  .articles-info h1 {
    margin-top: 1.13rem;
    font-size: 1.25rem;
  }
  .articles-info p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-top: 0.5rem;
  }
  .ariticles-hero {
    width: 100%;
    height: 100%;
  }
  .articles-item {
    align-items: flex-start;
    margin-top: 1.5rem;
    flex-direction: column-reverse;
  }
}
</style>
