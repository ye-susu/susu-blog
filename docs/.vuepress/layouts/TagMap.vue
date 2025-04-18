<script setup>
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { RouteLink } from "vuepress/client";

// 尝试代码
import { ref, computed, defineAsyncComponent, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const categoryMap = useBlogCategory("categories");

const currentCategory = ref(null);

watchEffect(() => {
  const keys = Object.keys(categoryMap.value.map);
  //   const fromQuery = route.query.category;
  //   console.log(fromQuery);
  if (!currentCategory.value && keys.length > 0) {
    currentCategory.value = keys[0];
  }
});

const layoutMap = {
  专题文章: defineAsyncComponent(() =>
    import("../components/TopicArticle.vue")
  ),
  经验总结: defineAsyncComponent(() =>
    import("../components/ExperienceArticle.vue")
  ),
  分享文稿: defineAsyncComponent(() =>
    import("../components/ShareArticle.vue")
  ),
};

const currentItems = computed(() => {
  if (!currentCategory.value || !categoryMap.value.map) return [];
  return categoryMap.value.map[currentCategory.value]?.items || [];
});

const CurrentLayout = computed(() => {
  return layoutMap[currentCategory.value || ""] || null;
});
</script>
<template>
  <div>
    <h1>Tag page</h1>
    <ul>
      <li v-for="({ items, path }, name) in categoryMap.map" :key="path">
        <RouteLink :key="name" :to="path" class="category">
          {{ name }}
          <span class="category-num">
            {{ items.length }}
          </span>
        </RouteLink>
        <component
          :is="CurrentLayout"
          :items="currentItems"
          v-if="CurrentLayout"
        />
      </li>
    </ul>
  </div>
</template>