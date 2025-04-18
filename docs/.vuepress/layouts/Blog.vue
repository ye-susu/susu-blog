<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import TopicArticle from "../components/TopicArticle.vue";
import ExperienceArticle from "../components/ExperienceArticle.vue";
import ShareArticle from "../components/ShareArticle.vue";
import { ref, computed } from "vue";
import { useBlogType } from "@vuepress/plugin-blog/client";

const blog = useBlogType("blog");
const blogPages = computed(() => blog?.items || []); // 所有类型为blog的文章
const categoryOrder = ["专题文章", "经验总结", "分享文稿"]; // 分类的顺序
const selected = ref("专题文章"); // 默认选中
const categories = computed(() =>
  categoryOrder.map((name) => ({
    name,
    pages: blogPages.value.filter((p) => p.frontmatter?.category === name),
  }))
);
const currentPages = computed(
  () => categories.value.find((c) => c.name === selected.value)?.pages || []
);

const layoutMap = {
  专题文章: TopicArticle,
  经验总结: ExperienceArticle,
  分享文稿: ShareArticle,
};
console.log("blogPages:", blogPages);
</script>

<template>
  <ParentLayout>
    <template #page>
      <div class="blog-page">
        <div class="tabs">
          <button
            v-for="cat in categories.value"
            :key="cat.name"
            @click="selected = cat.name"
            :class="{ active: selected === cat.name }"
          >
            {{ cat.name }} ({{ cat.pages.length }})
          </button>
        </div>

        <div class="content-area">
          <component
            :is="layoutMap[selected] || 'DefaultLayout'"
            :pages="currentPages"
          />
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.tabs {
  margin-top: 5rem;
}
</style>