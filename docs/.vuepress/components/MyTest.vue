<template>
  <div>
    <h1>{{ pageData.title }}</h1>
    <p>{{ pageData.frontmatter.description }}</p>
    <p>{{ pageData.frontmatter.date.split("T")[0] }}</p>
    <img :src="pageData.frontmatter.heroImage" alt="heroImage" />
  </div>
</template>
<script>
import { usePageData } from "vuepress/client";
export default {
  setup() {
    // 获取当前页面的数据
    const pageData = usePageData();
    return {
      pageData,
    };
  },
};
</script>
