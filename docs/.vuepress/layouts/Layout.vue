<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">
        <footer class="my-footer">
          Copyright © 2025 <a href="/">Yesusu</a>
        </footer>
      </div>
    </template>
  </ParentLayout>
</template>

<style scoped>
.footer {
  max-width: 47.25rem;

  padding: 0 2rem;
  margin: 2rem auto 0;
}
.my-footer {
  text-align: center;
  width: 100%;
  font-size: 0.875rem;
  color: #6e6e75;
  border-top: 1px solid #f0f0f0;
  padding-top: 1.25rem;
}
.my-footer a {
  color: #6e6e75;
  font-weight: 400;
}
.my-footer a:hover {
  color: #3c3c43;
  font-weight: 500;
}

@media (max-width: 430px) {
  .footer {
    padding: 0 1.25rem;
  }
  .my-footer {
    font-size: 0.75rem;
    padding-top: 1rem;
  }
}
</style>