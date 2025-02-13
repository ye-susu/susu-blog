<script>
import { usePageData } from "vuepress/client";
export default {
  setup() {
    const pageData = usePageData();
    return {
      pageData,
    };
  },
};
</script>

<template>
  <div v-if="$page.readingTime" class="readingInfo">
    <p>
      发布时间：<span>{{ pageData.frontmatter.date.split("T")[0] }}</span>
    </p>
    <p>
      预计阅读时间：<span>{{ Math.round($page.readingTime.minutes) }}分钟</span>
    </p>
    <p>
      字数共计：<span>{{ $page.readingTime.words }}</span>
    </p>
  </div>
</template>
<style scoped>
.readingInfo {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.readingInfo p {
  margin-block-start: 0;
  margin-block-end: 0.6rem;
}
.readingInfo p span {
  font-weight: 600;
}
</style>