<script setup>
import { ClientOnly } from "@vuepress/client";
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { useDarkMode } from "@vuepress/theme-default/client";
import ProjectCards from "./ProjectCards.vue";
import ContentList from "./ContentList.vue";
import SectionHeader from "./SectionHeader.vue";
import Footer from "./Footer.vue";
import { useMediaQuery } from "../composables/useMediaQuery.js";

const animationReady = ref(false);
const animationFailed = ref(false);
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

// 使用网站当前模式，兼容手动切换和跟随系统
const isDarkMode = useDarkMode();

const heroSrc = computed(() =>
  isDarkMode.value
    ? "/lottie/home-hero-dark.lottie"
    : "/lottie/home-hero.lottie"
);

// 切换素材时，重新显示封面，等待新动画绘制完成
watch(
  [heroSrc, prefersReducedMotion],
  () => {
    animationReady.value = false;
    animationFailed.value = false;
  },
  { flush: "sync" }
);

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
  <main class="home blog-page-shell">
    <div class="blog-page-body">
      <h1 class="blog-sr-only">耶稣稣的设计博客与作品集</h1>
      <div class="hero-image">
        <!-- 两张封面都保留在静态 HTML 中，由 CSS 决定显示哪张 -->
        <img v-if="!animationReady" src="/images/home-hero-cover.png" alt="" class="hero-cover hero-cover--light"
          loading="eager" decoding="async" />

        <img v-if="!animationReady" src="/images/home-hero-cover-dark.png" alt="" class="hero-cover hero-cover--dark"
          loading="eager" decoding="async" />

        <ClientOnly>
          <LottieHero v-if="!animationFailed && !prefersReducedMotion" :key="heroSrc" :src="heroSrc"
            class="hero-animation" :class="{ 'is-loading': !animationReady }" @loading="animationReady = false"
            @ready="animationReady = true" @error="showCover" />
        </ClientOnly>
      </div>
      <section class="home-articles">
        <SectionHeader title="文章" more-link="/blog/" more-label="查看更多文章" />
        <ContentList type="blog" :limit="3" title-tag="h3" />
      </section>

      <section class="home-projects">
        <SectionHeader title="项目" more-link="/projects/" more-label="查看更多项目" />
        <ProjectCards :home-show="true" />
      </section>
    </div>

    <Footer />
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
  border-bottom: 1px solid var(--blog-c-divider);
  overflow: hidden;
  position: relative;
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

.hero-cover--dark {
  display: none;
}

:global(html[data-theme="dark"] .hero-cover--light) {
  display: none;
}

:global(html[data-theme="dark"] .hero-cover--dark) {
  display: block;
}

.hero-animation.is-loading {
  opacity: 0;
}

.home-articles > .section-header {
  margin-bottom: 0.5rem;
}

.home-projects {
  margin-top: 5rem;
}

.home-projects > .section-header {
  margin-bottom: 0.25rem;
}

@media (max-width: 720px) {
  .home {
    padding: 5rem 1.25rem 0;
  }

  .hero-image {
    margin-bottom: 3rem;
    aspect-ratio: 1.3 / 1;
  }

  .hero-cover {
    object-fit: cover;
    transform: scale(1.1);
  }

  .home-articles > .section-header {
    margin-bottom: 0.25rem;
  }

  .home-projects {
    margin-top: 3rem;
  }
}
</style>
