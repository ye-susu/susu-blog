<template>
  <div>
    <ul class="cate-list">
      <li v-for="item in cateList" :key="item.id">
        <div
          class="cate-list-item"
          :class="{ active: currentActiveCate === item.cate }"
          @click="goCate(item.cate)"
        >
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
import { computed } from "vue"; // ★ 修改点 2：删掉了没用到的 ref
import { usePageData } from "@vuepress/client";
import { useRouter, useRoute } from "vue-router";

const pageData = usePageData();
const router = useRouter();
const route = useRoute();

const cateList = computed(() => {
  return pageData.value.frontmatter.cates || []; //增加 || []
});

// 新增计算属性 currentActiveCate
const currentActiveCate = computed(() => {
  const queryCate = route.query.cate;
  if (queryCate) return queryCate;
  return cateList.value.length > 0 ? cateList.value[0].cate : "";
});

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
    (item) => item.cate === currentActiveCate.value && item.path !== currentPath
  );
  return cateItem?.path || "";
});
</script>

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
.cate-list-item {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.125rem;
  flex-direction: column;
  border: 1px solid #e9e9eb;
  box-sizing: border-box;
}
.cate-list-item.active {
  border-color: #3c3c45;
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
  .cate-list-item {
    padding: 0.75rem 1rem;
  }
}
</style>
