<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import { RouteLink } from '@vuepress/client';
import Footer from '../components/Footer.vue';
import AboutContact from '../components/AboutContact.vue';

const greeting = 'Hi，我是耶稣稣 👋';
const letters = Array.from(greeting);
</script>

<template>
  <ParentLayout v-sidebar-accessibility>
    <template #page>
      <main class="about-container blog-page-shell">
        <div class="blog-page-body">
          <section class="about-hero" aria-labelledby="about-greeting">
            <div class="portrait blog-image-frame blog-image-frame--thumbnail">
              <img v-image-loading src="/images/portrait.webp" alt="耶稣稣的个人头像" width="400" height="400" loading="eager"
                decoding="async" />
            </div>
            <div class="about-intro">
              <h1 id="about-greeting" class="greeting" :aria-label="greeting">
                <!-- 每种形状只有一条闭合路径，半透明主题色也不会叠色。 -->
                <svg class="greeting-shape greeting-shape--desktop" viewBox="0 0 224 52" preserveAspectRatio="none"
                  aria-hidden="true" focusable="false">
                  <path d="M26 0H198A26 26 0 0 1 198 52H0L7.7122 44.4812A26 26 0 0 1 26 0Z" />
                </svg>
                <svg class="greeting-shape greeting-shape--mobile" viewBox="0 0 191 54" preserveAspectRatio="none"
                  aria-hidden="true" focusable="false">
                  <path d="M23 8H87.5L95.783 0L103.5 8H168A23 23 0 0 1 168 54H23A23 23 0 0 1 23 8Z" />
                </svg>
                <span aria-hidden="true" class="greeting-letters"><span v-for="(letter, index) in letters" :key="index"
                    class="greeting-letter" :style="{ '--letter-index': index }">{{ letter }}</span></span>
              </h1>
              <p class="about-description">UI 设计师，目前在某金融公司从事海外金融与电商的设计工作，具有<strong>「产品改版、设计系统搭建、国际化项目」</strong>的设计经验。</p>
            </div>
          </section>

          <section class="about-experience content" aria-labelledby="about-projects-title">
            <h2 id="about-projects-title">项目经历</h2>
            <ul class="experience-list">
              <li>
                <h3 class="experience-title">
                  <RouteLink class="vp-external-link-icon" to="/projects/goswak/">Goswak</RouteLink><span>｜社交电商</span>
                </h3>
                <p>
                  第一次参与国际化项目，期间完成了竞品调研、风格设定、界面输出、建立设计规范等工作。此项目使我获得了海外产品的设计经验，并沉淀了<RouteLink
                    class="vp-external-link-icon" to="/blog/share/#multilingual-design-guidelines">《多语言设计指南》</RouteLink>。
                </p>
              </li>
              <li>
                <h3 class="experience-title">
                  <RouteLink class="vp-external-link-icon" to="/projects/akulaku/">Akulaku</RouteLink><span>｜分期购物</span>
                </h3>
                <p>负责核心产品改版，从业务问题中挖掘体验机会点，制定设计策略并推动方案落地。上线后关键模块数据获得提升，也让我开始更加关注设计与业务结果之间的关系。</p>
              </li>
              <li>
                <h3 class="experience-title">
                  <RouteLink class="vp-external-link-icon" to="/projects/akulaku sa/">Akulaku SA</RouteLink><span>｜销售管理系统</span>
                </h3>
                <p>从 C 端走向 B 端设计，开始深入处理角色权限、业务流程、数据密度等 B 端问题。期间对商户端竞品进行了系统研究，并沉淀了<RouteLink class="vp-external-link-icon"
                    to="/blog/share/#merchant-visual-research">《商户端竞品视觉调研》</RouteLink>。</p>
              </li>
              <li>
                <h3 class="experience-title">
                  <RouteLink class="vp-external-link-icon" to="/projects/3.0 components/">UI 3.0 Flutter 组件库</RouteLink>
                </h3>
                <p>主导 Flutter 组件库建设，该项目旨在解决各团队重复造轮子的问题，提升组件库的跨项目应用，同时沉淀了<RouteLink class="vp-external-link-icon"
                    to="/blog/share/#ui-30-flutter-component-design">《关于 UI 3.0 Flutter 组件库的设计思考》</RouteLink>。</p>
              </li>
            </ul>
          </section>

          <section class="about-contact" aria-labelledby="about-contact-title">
            <h2 id="about-contact-title">联系方式</h2>
            <AboutContact />
            <p class="contact-note">如果对我的工作感兴趣，欢迎联系 👏 👏 👏。</p>
          </section>
        </div>

        <Footer />
      </main>
    </template>
  </ParentLayout>
</template>

<style scoped>
.about-container {
  box-sizing: border-box;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 8.125rem 1.25rem 0;
  color: var(--vp-c-text);
}

.about-container h1,
.about-container h2,
.about-container p {
  margin: 0;
  padding: 0;
  border: 0;
}

.about-hero {
  display: grid;
  grid-template-columns: 10rem minmax(0, 1fr);
  align-items: center;
  gap: 3.25rem;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid var(--blog-c-divider);
}

.portrait {
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--blog-c-surface);
}

.portrait img {
  object-fit: cover;
}

.about-intro {
  min-width: 0;
}

.about-container .greeting {
  box-sizing: border-box;
  min-width: 14rem;
  justify-content: center;
  position: relative;
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  color: var(--vp-c-bg);
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem;
}

.greeting-shape {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: var(--vp-c-text);
  pointer-events: none;
}

.greeting-shape--mobile {
  display: none;
}

.greeting-letters {
  position: relative;
  white-space: pre;
}

.greeting-letter {
  display: inline-block;
  animation: greeting-reveal 140ms ease-out both;
  animation-delay: calc(var(--letter-index) * 65ms);
}

@keyframes greeting-reveal {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.about-container .about-description {
  margin-top: 1.75rem;
  font-size: 1rem;
  line-height: 1.75rem;
  overflow-wrap: anywhere;
}

.about-description strong {
  font-weight: 600;
}

.about-experience {
  padding-top: 4.25rem;
}

.about-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.5rem;
}

.about-experience h2 {
  margin-bottom: 2rem;
}

.experience-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.experience-list>li {
  position: relative;
  padding-left: 2.375rem;
  margin: 0;
}

.experience-list>li:not(:last-child) {
  padding-bottom: 2rem;
}

.experience-list>li::before {
  content: '';
  position: absolute;
  left: -0.078125rem;
  top: 0.484375rem;
  box-sizing: border-box;
  width: 0.78125rem;
  height: 0.78125rem;
  border: 0.15625rem solid var(--vp-c-text);
  border-radius: 50%;
  background: var(--vp-c-bg);
}

.experience-list>li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 0.265625rem;
  top: 1.5rem;
  bottom: -0.25rem;
  width: 0.09375rem;
  background: var(--blog-c-divider);
}

.about-container .experience-title {
  margin: 0 0 1rem;
  padding: 0;
  border: 0;
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 1.75rem;
  overflow-wrap: anywhere;
}

.experience-list p {
  font-size: 1rem;
  line-height: 1.75rem;
  overflow-wrap: anywhere;
}

.content a {
  --external-link-c-icon: currentColor;
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
  text-decoration-thickness: 0.09375rem;
}

.content a:focus-visible {
  outline: 0.125rem solid currentColor;
  outline-offset: 0.1875rem;
}

.about-contact {
  padding-top: 4.25rem;
}

.about-contact h2 {
  margin-bottom: 2rem;
}

.about-container .contact-note {
  margin-top: 1.75rem;
  font-size: 1rem;
  line-height: 1.75rem;
}

.about-container :deep(.my-footer) {
  margin-top: 4.25rem;
}

@media (max-width: 45rem) {
  .about-container {
    padding-top: 6rem;
  }

  .about-hero {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    padding-bottom: 2.25rem;
  }

  .portrait {
    width: 7.5rem;
  }

  .about-intro {
    width: 100%;
    text-align: center;
  }

  .about-container .greeting {
    min-width: 11.9375rem;
    padding: 0.5625rem 1rem;
    font-size: 1.1875rem;
    line-height: 1.75rem;
  }

  .greeting-shape--desktop {
    display: none;
  }

  .greeting-shape--mobile {
    display: block;
    top: -0.5rem;
    height: calc(100% + 0.5rem);
  }

  .about-container .about-description {
    margin-top: 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.625rem;
    text-align: left;
  }

  .about-experience {
    padding-top: 2.25rem;
  }

  .about-container h2 {
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  .about-experience h2 {
    margin-bottom: 1.25rem;
  }

  .experience-list>li {
    padding-left: 2rem;
  }

  .experience-list>li:not(:last-child) {
    padding-bottom: 1.75rem;
  }

  .about-container .experience-title {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
  }

  .experience-list p {
    font-size: 0.9375rem;
    line-height: 1.625rem;
  }

  .content a {
    text-decoration-thickness: 0.0625rem;
  }

  .about-contact {
    padding-top: 2.5rem;
  }

  .about-contact h2 {
    margin-bottom: 1.5rem;
  }

  .about-container .contact-note {
    margin-top: 1.25rem;
    font-size: 0.9375rem;
    line-height: 1.625rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .greeting-letter {
    animation: none;
  }
}
</style>
