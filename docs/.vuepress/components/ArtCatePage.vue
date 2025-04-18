<template>
  <div>
    <ul class="cate-list">
      <li v-for="item in cateList" :key="item.id">
        <div class="cate-list-item" @click="goCate(item.cate)">
          <span class="title">{{ item.title }}</span>
          <span class="count">{{ item.count }}</span>
        </div>
      </li>
    </ul>
  </div>
  <div class="art-list">
    <Content v-if="listPath && listPath !== $route.path" :path="listPath" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { usePageData } from "@vuepress/client";
import { useRouter, useRoute } from "vue-router";

const pageData = usePageData();
const cateList = computed(() => {
  return pageData.value.frontmatter.cates;
});

const router = useRouter();
const route = useRoute();
const goCate = (cate) => {
  router.push({
    path: pageData.value.path,
    query: {
      cate,
    },
  });
};

const listPath = computed(() => {
  const currentPath = pageData.value.path;
  const cateItem = cateList.value.find(
    (item) => item.cate === route.query.cate && item.path !== currentPath
  );
  return cateItem?.path || "";
});
</script>

<style scoped>
.cate-list {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  gap: 1.25rem;
  padding: 0;
}
.cate-list li {
  list-style: none;
  width: 100%;
}
.cate-list-item {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.125rem;
  flex-direction: column;
  background-color: #f6f6f6;
}
.title {
  font-size: 1.125rem;
  font-weight: bold;
}
.cate-list-item:hover {
  background-color: #ebebeb;
}
@media (max-width: 720px) {
  .cate-list {
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }
  .title {
    font-size: 1rem;
  }
  .count {
    font-size: 0.875rem;
  }
  .cate-list-item {
    padding: 0.75rem 1rem;
  }
}
</style>
