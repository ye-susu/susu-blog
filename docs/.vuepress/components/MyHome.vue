<script setup>
import MyHomeNav from "./MyHomeNav.vue";
import MyHomeFooter from "./MyHomeFooter.vue";
import { ref } from "vue";

const navImages = ref([
  { src: "/images/article.webp", link: "/articles/", alt: "articles" },
  { src: "/images/project.webp", link: "/projects/", alt: "projects" },
  { src: "/images/about.webp", link: "/about/", alt: "about" },
]);
</script>

<template>
  <div class="home-container">
    <div class="hero-image">
      <img src="/images/hero.webp" alt="heroImage" />
    </div>
    <MyHomeNav :images="navImages" />
    <MyHomeFooter />
  </div>
</template>
<style scoped>
.home-container {
  padding: 8rem 1.25rem 1.25rem;
  box-sizing: border-box;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
}
.hero-image {
  margin-bottom: 3.625rem;
  text-align: center;
  overflow: hidden;
}
.hero-image img {
  width: 86%;
}
@media (max-width: 768px) {
  .home-container {
    padding: 3rem 0.5rem 0.5rem;
  }
  .hero-image {
    margin-bottom: 1.5rem;
  }
  .hero-image img {
    width: 100%;
  }
}
</style>


