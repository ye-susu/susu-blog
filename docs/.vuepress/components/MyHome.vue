<script setup>
import { ClientOnly } from "@vuepress/client";
import { defineAsyncComponent, ref } from "vue";
import ProjectCards from "./ProjectCards.vue";
import Footer from "./Footer.vue";

const animationReady = ref(false);
const animationFailed = ref(false);

const showCover = () => {
  animationReady.value = false;
  animationFailed.value = true;
};

const LottieHero = defineAsyncComponent({
  loader: () => import("./LottieHero.vue"),
  suspensible: false,
  timeout: 15000,

  // 出错时不显示动画，外层封面继续保留
  errorComponent: { render: () => null },

  onError(_error, _retry, fail) {
    showCover();
    fail();
  },
});
</script>

<template>
  <main class="home">
    <div class="hero-image">
      <!-- 放在 ClientOnly 外，静态 HTML 中也能显示封面 -->
      <img v-if="!animationReady" src="/images/home-hero-cover.png" alt="" class="hero-cover" loading="eager"
        fetchpriority="high" decoding="async" />

      <ClientOnly>
        <LottieHero v-if="!animationFailed" src="/lottie/home-hero.lottie" class="hero-animation"
          @loading="animationReady = false" @ready="animationReady = true" @error="showCover" />
      </ClientOnly>
    </div>
    <ArtList :homeShow="true" listTitle="文章" moreLink="/blog/?cate=art" />

    <ProjectCards :homeShow="true" listTitle="项目" moreLink="/projects/" :paddingShow="false" scene="home">
      <Footer />
    </ProjectCards>
  </main>
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
  margin-bottom: 5rem;
  aspect-ratio: 1.9 / 1;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  position: relative;
}

.hero-image img {
  width: 100%;
}

.hero-cover,
.hero-animation {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.hero-cover {
  object-fit: contain;
}

@media (max-width: 720px) {
  .home {
    padding: 5rem 1.25rem 0;
  }

  .hero-image {
    margin-bottom: 3rem;
    aspect-ratio: 1.3 / 1;
  }

  .hero-image img {
    width: 100%;
  }

  .hero-cover {
    object-fit: cover;
    transform: scale(1.1);
  }
}
</style>
