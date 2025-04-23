<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { computed } from "vue";

const props = defineProps({
  homeShow: {
    type: Boolean,
    default: false,
  },
  listTitle: {
    type: String,
    default: "",
  },
  moreLink: {
    type: String,
    default: "",
  },
  paddingShow: {
    type: Boolean,
    default: true,
  },
  scene: {
    type: String,
    default: "default",
  },
});
const projects = useBlogType("projects");
const listShow = computed(() => {
  const listContent = projects.value.items;
  return props.homeShow ? listContent.slice(0, 2) : listContent;
});
</script>
<template>
  <ParentLayout>
    <template #page>
      <div
        :class="[
          'projects-container',
          { 'with-padding': props.paddingShow },
          `scene-${props.scene}`,
        ]"
      >
        <div v-if="listTitle || moreLink" class="list-header">
          <h2 class="list-title">{{ listTitle }}</h2>
          <a
            v-if="moreLink"
            :href="moreLink"
            class="more-link"
            aria-label="查看更多"
          >
            <img src="/images/icon-more.svg" alt="more" />
          </a>
        </div>
        <div v-if="listShow.length" class="projects-item">
          <div
            v-for="{ info, path } in listShow"
            :key="path"
            class="projects"
            @click="$router.push(path)"
          >
            <div class="projects-heroimage">
              <img
                v-if="info.heroImage"
                :src="info.heroImage"
                alt="heroImage"
                class="no-zoom"
              />
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
  </ParentLayout>
</template>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
}
.list-title {
  border: none;
  font-size: 1.675rem;
  margin: 0;
  padding: 0;
}
.projects-container {
  box-sizing: border-box;
  max-width: 47.5rem;
  margin: 4.5rem auto 0;
}
.projects-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
}
.projects-item .projects {
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}
.projects-info .title,
.projects-info .date {
  margin-block-start: 0;
  margin-block-end: 0;
}
.projects-info .title {
  font-size: 1.5rem;
  line-height: normal;
  margin-top: 1.4rem;
  padding: 0;
}
.projects-info .date {
  font-size: 1rem;
  line-height: 1.75rem;
  margin-top: 0.6rem;
  color: #6e6e75;
}
.projects-heroimage {
  overflow: hidden;
  border-radius: 0.5rem;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f6f6f6;
}
.projects-heroimage img {
  width: 100%;
  display: block;
  transition: transform 0.2s ease-in-out;
}
.projects-heroimage img:hover {
  transform: scale(1.05);
}
@media (max-width: 720px) {
  .projects-container {
    margin: 4rem 0;
  }
  .scene-home {
    margin-top: 2rem;
  }
  .projects-container.with-padding {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .list-header {
    margin-bottom: 0;
  }
  .list-title {
    font-size: 1.375rem;
  }
  .more-link img {
    width: 2.75rem;
  }
  .projects-heroimage img:hover {
    transform: scale(1);
  }
  .projects-item .projects {
    padding: 0.75rem 0;
  }
  .projects-item {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .projects-info .title {
    margin-top: 1.13rem;
    font-size: 1.25rem;
  }
  .projects-info .date {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-top: 0.5rem;
  }
}
</style>