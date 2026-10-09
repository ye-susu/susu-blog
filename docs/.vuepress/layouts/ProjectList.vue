<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ProjectCards from "../components/ProjectCards.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <ParentLayout>
    <template #page>
      <main>
        <ProjectCards>
          <Footer />
        </ProjectCards>
      </main>
    </template>
  </ParentLayout>
</template>