<script setup>
import { computed } from "vue";
import { RouteLink } from "@vuepress/client";
import { useBlogType } from "@vuepress/plugin-blog/client";
import ContentList from "./ContentList.vue";
import FigmaEmbed from "./FigmaEmbed.vue";
import shareItems from "@share-items";

defineProps({
  category: {
    type: String,
    default: "art",
    validator: (value) => ["art", "experience", "share"].includes(value),
  },
});

const articles = useBlogType("blog");
const experiences = useBlogType("experience");

const cateList = computed(() => [
  { cate: "art", title: "设计文章", path: "/blog/", count: articles.value.items.length },
  { cate: "experience", title: "经验总结", path: "/blog/experience/", count: experiences.value.items.length },
  { cate: "share", title: "分享稿件", path: "/blog/share/", count: shareItems.length },
]);
</script>

<template>
  <div>
    <ul class="cate-list">
      <li v-for="item in cateList" :key="item.cate">
        <RouteLink
          :to="item.path"
          class="cate-list-item"
          :class="{ active: category === item.cate }"
          :aria-current="category === item.cate ? 'page' : undefined"
        >
          <span class="title">{{ item.title }}</span>
          <span class="count">共 {{ item.count }} 篇</span>
        </RouteLink>
      </li>
    </ul>
  </div>

  <div class="art-list">
    <ContentList v-if="category === 'art'" type="blog" />
    <ContentList v-else-if="category === 'experience'" type="experience" />

    <template v-else-if="category === 'share'">
      <template v-for="(item, index) in shareItems" :key="item.id">
        <h5 :id="item.id">{{ item.title }}</h5>
        <FigmaEmbed
            :iframeSrc="item.iframeSrc"
            :coverImg="item.coverImg"
            :ratio="item.ratio"
            :title="item.title"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetch-priority="index === 0 ? 'high' : 'auto'"
        />
        <br v-if="index < shareItems.length - 1" />
      </template>
    </template>
  </div>
</template>

<style scoped>
.cate-list {
  margin: 1.5rem 0;
  display: flex;
  gap: 1.25rem;
  padding: 0;
}

.cate-list li {
  list-style: none;
  width: 100%;
}

.cate-list .cate-list-item {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.125rem;
  flex-direction: column;
  border: 1px solid var(--blog-c-card-border);
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  text-decoration: none;
}

.cate-list-item.active {
  border-color: var(--blog-c-selected);
}

.title {
  font-size: 1.125rem;
  font-weight: bold;
}

@media (max-width: 720px) {
  .cate-list {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1rem;
  }

  .count {
    font-size: 0.875rem;
  }

  .cate-list .cate-list-item {
    padding: 0.75rem 1rem;
  }
}
</style>
