<script setup>
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import VPPage from "@theme/VPPage.vue";
import MyHome from "../components/MyHome.vue";
import Footer from "../components/Footer.vue";

const frontmatter = usePageFrontmatter();
const page = usePageData();
</script>

<template>
  <ParentLayout v-sidebar-accessibility>
    <template #page>
      <MyHome v-if="frontmatter.home" />

      <div v-else class="blog-page-shell">
        <div class="blog-page-body">
          <VPPage :key="page.path">
            <template #top>
              <h1 v-if="frontmatter.pageTitleHidden" class="blog-sr-only">
                {{ page.title }}
              </h1>
            </template>
          </VPPage>
        </div>

        <div class="blog-page-footer">
          <div class="footer">
            <Footer class="article-footer" />
          </div>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.footer {
  max-width: 47.25rem;
  padding: 0 2rem;
  margin: 0 auto;
}

/* 保留原来文章页的页脚间距 */
.footer>.article-footer {
  margin: 0;
}

@media (max-width: 720px) {
  .footer {
    padding: 0 1.25rem;
  }
}
</style>
