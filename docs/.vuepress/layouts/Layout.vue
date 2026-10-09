<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        <Footer class="article-footer" />
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