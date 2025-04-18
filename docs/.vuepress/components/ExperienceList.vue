<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import { usePageFrontmatter } from "vuepress/client";

const experArt = useBlogType("experience");
</script>
<template>
  <div class="experArt-list">
    <div v-if="experArt.items?.length" class="experArt-wrapper">
      <article
        v-for="{ info, path } in experArt.items"
        :key="path"
        class="experArt-item"
        @click="$router.push(path)"
      >
        <div class="experArt-info">
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
      </article>
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
  margin-top: 2.5rem;
  cursor: pointer;
}
.experArt-info {
  padding-right: 2rem;
}
.experArt-info .date {
  color: #6e6e75;
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
  -webkit-line-clamp: 2; /* 限制最多显示 2 行 */
  overflow: hidden; /* 必须设置为 hidden */
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
  .experArt-hero {
    width: 100%;
  }
  .experArt-item {
    align-items: flex-start;
    margin-top: 2rem;
    flex-direction: column-reverse;
  }
}
</style>
