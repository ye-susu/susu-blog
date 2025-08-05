<script setup>
import ProjectList from "../layouts/ProjectList.vue";
</script>
  
<template>
  <div class="home">
    <div class="hero-image">
      <img src="https://image.yesusu.top/PicGo/homeHero2.png" alt="heroImage" />
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
  padding: 6rem 1.25rem 2rem;
  box-sizing: border-box;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
}
.hero-image {
  margin-bottom: 4.5rem;
  aspect-ratio: 1.94 / 1;
  text-align: center;
  border-radius: 0.75rem;
  border: 1px solid #ebebeb;
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
    margin-bottom: 2rem;
  }
  .hero-image img {
    width: 100%;
  }
}
</style>


