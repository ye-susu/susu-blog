<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page>
      <div class="about-container">
        <div class="portrait">
          <img src="/images/portrait.webp" alt="portrait" />
        </div>
        <div class="content">
          <h2>关于我</h2>
          <p>
            Hi，我是<span>耶稣稣</span>，呆过设计公司，混过企业。目前从事海外金融及电商的设计工作，具有设计系统搭建、产品改版升级、国际化项目的设计经验。
          </p>
          <h2>项目经历</h2>
          <p>
            <a href="/projects/goswak/">Goswak</a>
            是我参与的第一个国际化项目，期间我完成了竞品调研、视觉风格设定、主要界面输出、设计规范建立等工作。通过此项目使我习得了海外产品的设计经验，并输出了<a
              href=""
              >《国际化产品界面设计指南》</a
            >，为团队成员的工作提供参考。
          </p>
          <p>
            21年负责了公司主要产品
            <a href="">Akulaku</a>
            改版，主动挖取机会点，提供设计策略，并输出了设计方案。上线后成功达成业务目标，各主要模块数据均有提升。
          </p>
          <p>
            22年独立负责 <a href="">Akulaku Mitra</a> 与
            <a href="">SA</a> 的设计工作，该项目拓展了我 B
            端产品的设计经验，期间输出了
            <a href="">《B端产品视觉特征分析》</a> 并向团队分享。
          </p>
          <p>
            24年完成了
            <a href="">UI 3.0</a>
            设计系统的搭建，此设计系统搭建之初旨在解决团队重复造轮子的问题，一套设计系统可供多项目使用。期间输出了<a
              href=""
              >《关于设计系统的搭建思考》</a
            >
            ，并向团队分享。
          </p>
          <h2>联系方式</h2>
          <p><span>邮箱：</span>yepan1749@gmail.com</p>
          <p><span>微信：</span>15200899567</p>
          <p><span>X：</span>@Yesusu6</p>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>
<style scoped>
.about-container {
  padding: 6rem 1.25rem 1.25rem;
  box-sizing: border-box;
  max-width: 49.75rem;
  width: 100%;
  margin: 0 auto 2rem;
}

.portrait {
  width: 10rem;
  aspect-ratio: 1 / 1;
  background-color: #f6f6f6;
}

.portrait img {
  display: block;
  width: 10rem;
}
.content h2,
.content p {
  border: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
.content h2 {
  font-size: 2rem;
  line-height: normal;
  margin: 3rem 0 1.5rem;
  padding: 0;
}
.content p {
  font-size: 1rem;
  line-height: 1.75rem;
  margin-bottom: 1.75rem;
  text-align: justify;
}
.content p:nth-last-child(-n + 3) {
  margin: 0;
}
.content a,
.content span {
  font-weight: 600;
}
.content a {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}
@media (max-width: 720px) {
  .about-container {
    padding-top: 6rem;
  }
  .portrait {
    width: 8rem;
  }
  .portrait img {
    width: 8rem;
    margin: 0;
  }
  .content h2 {
    font-size: 1.625rem;
    margin: 2.5rem 0 0.825rem;
  }
  .content p {
    font-size: 0.9375rem;
    line-height: 1.625rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  .content a {
    text-decoration-thickness: 1px;
  }
}
</style>