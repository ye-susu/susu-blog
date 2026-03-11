<template>
  <div>
    <ul class="cate-list">
      <li v-for="item in cateList" :key="item.id">
        <div
          class="cate-list-item"
          :class="{ active: activeCate === item.cate }"
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
import { ref, computed, onMounted, watch } from "vue";
import { usePageData } from "@vuepress/client";
import { useRouter, useRoute } from "vue-router";

const pageData = usePageData();
const router = useRouter();
const route = useRoute();

const cateList = computed(() => {
  return pageData.value.frontmatter.cates || [];
});

// 1. 将计算属性改为响应式变量 ref
// 初始值给一个空或者服务器端一致的默认值
const activeCate = ref("");

// 2. 在挂载后获取真正的 URL 参数
onMounted(() => {
  const queryCate = route.query.cate;
  if (queryCate) {
    activeCate.value = queryCate;
  } else if (cateList.value.length > 0) {
    activeCate.value = cateList.value[0].cate;
  }
});

// 3. 监听路由变化，确保点击后不仅 URL 变了，变量也跟着变
watch(
  () => route.query.cate,
  (newCate) => {
    if (newCate) {
      activeCate.value = newCate;
    }
  }
);

const goCate = (cate) => {
  // 立即更新本地状态，提升响应速度
  activeCate.value = cate;
  router.push({
    path: pageData.value.path,
    query: { cate },
  });
};

const listPath = computed(() => {
  // 如果 activeCate 还没初始化（SSR阶段），先不计算路径
  if (!activeCate.value) return "";

  const currentPath = pageData.value.path;
  const cateItem = cateList.value.find(
    (item) => item.cate === activeCate.value && item.path !== currentPath
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
