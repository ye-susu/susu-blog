<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";

const projects = useBlogType("projects");
</script>
<template>
  <div class="projects-container">
    <header class="projects-title">
      <img src="/images/projects.png" alt="projects" />
    </header>
    <div v-if="projects.items?.length" class="projects-item">
      <div
        v-for="{ info, path } in projects.items"
        :key="path"
        class="projects"
        @click="$router.push(path)"
      >
        <div class="projects-heroimage">
          <img v-if="info.heroImage" :src="info.heroImage" alt="heroImage" />
        </div>
        <div class="projects-info">
          <h1 class="title">
            {{ info.title }}
          </h1>
          <p v-if="info.date" class="date">
            发布于
            {{
              new Date(info.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>Nothing in here.</div>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 5rem 2.5rem 2.5rem;
  box-sizing: border-box;
  max-width: 52.5rem;
  width: 100%;
  margin: 0 auto;
}
.projects-title img {
  width: 23.875rem;
  height: 10rem;
  margin-bottom: 2.5rem;
  display: block;
}
.projects-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
}
.projects {
  cursor: pointer;
}
.projects-info h1,
.projects-info p {
  margin-block-start: 0;
  margin-block-end: 0;
}
.projects-info h1 {
  font-size: 1.5rem;
  line-height: normal;
  margin-top: 1.4rem;
}
.projects-info p {
  font-size: 1rem;
  line-height: 1.75rem;
  margin-top: 0.6rem;
  color: #6e6e75;
}
.projects-heroimage {
  overflow: hidden;
  border-radius: 0.5rem;
}
.projects-heroimage img {
  width: 100%;
  display: block;
  transition: transform 0.2s ease-in-out;
}
.projects-heroimage img:hover {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .projects-container {
    padding: 2rem 1.5rem 1.5rem;
  }
  .projects-title img {
    margin: 1rem 0 1.75rem;
    display: block;
    width: 16.875rem;
    height: 7.0625rem;
  }
  .projects-item {
    display: flex;
    flex-direction: column;
  }

  .projects-info h1 {
    margin-top: 1.13rem;
    font-size: 1.25rem;
  }
  .projects-info p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-top: 0.5rem;
  }
}
</style>