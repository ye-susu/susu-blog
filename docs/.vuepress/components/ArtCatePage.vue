<template>
  <div>
    <ul class="cate-list">
      <li v-for="item in cateList" :key="item.cate">
        <button type="button" class="cate-list-item" :class="{ active: activeCate === item.cate }"
          :aria-pressed="activeCate === item.cate" @click="goCate(item.cate)">
          <span class="title">{{ item.title }}</span>
          <span class="count">{{ item.count }}</span>
        </button>
      </li>
    </ul>
  </div>
  <div class="art-list">
    <Content v-if="listPath && listPath !== $route.path" :path="listPath" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { usePageData } from "@vuepress/client";
import { useRouter, useRoute } from "vue-router";
import { useBlogType } from "@vuepress/plugin-blog/client";
import { shareItems } from "../data/shareItems.js";

const pageData = usePageData();
const router = useRouter();
const route = useRoute();
const articles = useBlogType("blog");
const experiences = useBlogType("experience");

const cateList = computed(() => {
  const counts = {
    art: articles.value.items.length,
    experience: experiences.value.items.length,
    share: shareItems.length,
  };

  return (pageData.value.frontmatter.cates || []).map((item) => ({
    ...item,
    count:
      counts[item.cate] !== undefined
        ? `共 ${counts[item.cate]} 篇`
        : item.count,
  }));
});

// 保持静态 HTML 与客户端首次渲染一致
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

// 选中分类只由 URL 决定
const activeCate = computed(() => {
  const defaultCate = cateList.value[0]?.cate || "";

  // 构建静态 HTML、客户端首次渲染时，都显示默认分类
  if (!mounted.value) return defaultCate;

  // 挂载后，再根据 URL 切换到指定分类
  const queryCate = route.query.cate;
  const isValid =
    typeof queryCate === "string" &&
    cateList.value.some((item) => item.cate === queryCate);

  return isValid ? queryCate : defaultCate;
});

// 点击时只更新 URL，不再直接修改 activeCate
const goCate = (cate) => {
  if (!cateList.value.some((item) => item.cate === cate)) return;
  if (route.query.cate === cate) return;

  router.push({
    path: pageData.value.path,
    query: { ...route.query, cate },
  });
};

const listPath = computed(() => {
  if (!activeCate.value) return "";

  const cateItem = cateList.value.find(
    (item) => item.cate === activeCate.value
  );

  const path = cateItem?.path || "";
  return path === pageData.value.path ? "" : path;
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
  width: 100%;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
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
