<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ProjectCards from "../components/ProjectCards.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <ParentLayout v-sidebar-accessibility>
    <template #page>
      <main class="project-list-page blog-page-shell">
        <div class="blog-page-body">
          <h1 class="blog-sr-only">项目</h1>
          <ProjectCards />
        </div>

        <Footer />
      </main>
    </template>
  </ParentLayout>
</template>

<style scoped>
.project-list-page {
  box-sizing: border-box;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 4.5rem 1.25rem 0;
}

@media (max-width: 45rem) {
  .project-list-page {
    padding-top: 4rem;
  }
}
</style>
