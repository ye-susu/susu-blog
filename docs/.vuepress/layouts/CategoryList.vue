<script setup >
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { RouteLink } from "vuepress/client";

const categoryMap = useBlogCategory("categorys");
</script>
<template>
  <div>
    <h1>Tag page</h1>
    <div class="category-wrapper">
      <RouteLink
        v-for="({ items, path }, name) in categoryMap.map"
        :key="name"
        :to="path"
        class="category"
      >
        {{ name }}
        <span class="category-num">
          {{ items.length }}
        </span>
      </RouteLink>
    </div>
    <div v-if="categoryMap.currentItems" class="article-wrapper">
      <div v-if="!categoryMap.currentItems.length">Nothing in here.</div>
      <article
        v-for="{ info, path } in categoryMap.currentItems"
        :key="path"
        class="article"
        @click="$router.push(path)"
      >
        <header class="title">
          {{ info.title }}
        </header>
        <hr />
        <div class="article-info">
          <span v-if="info.author" class="author"
            >Author: {{ info.author }}</span
          >
          <span v-if="info.date" class="date"
            >Date: {{ new Date(info.date).toLocaleDateString() }}</span
          >
          <span v-if="info.category" class="category"
            >Category: {{ info.category.join(", ") }}</span
          >
          <span v-if="info.tag" class="tag"
            >Tag: {{ info.tag.join(", ") }}</span
          >
        </div>
        <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
      </article>
    </div>
  </div>
</template>