<script setup>
import { ClientOnly } from "@vuepress/client";
import ProjectList from "../layouts/ProjectList.vue";
</script>
  
<template>
  <div class="home">
    <div class="hero-image">
      <ClientOnly>
        <LottieHero src="/lottie/home-hero.lottie" />
      </ClientOnly>
    </div>
    <ArtList :homeShow="true" listTitle="文章" moreLink="/blog/?cate=art" />

    <ProjectList
      :homeShow="true"
      listTitle="项目"
      moreLink="/projects/"
      :paddingShow="false"
      scene="home"
    />
  </div>
</template>
<style scoped>
.home {
  padding: 6rem 1.25rem 0;
  box-sizing: border-box;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
}
.hero-image {
  margin-bottom: 4.5rem;
  aspect-ratio: 1.9 / 1;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
}
.hero-image img {
  width: 100%;
}
@media (max-width: 720px) {
  .home {
    padding: 5rem 1.25rem 0;
  }
  .hero-image {
    margin-bottom: 2.5rem;
    aspect-ratio: 1.3 / 1;
  }
  .hero-image img {
    width: 100%;
  }
}
</style>


