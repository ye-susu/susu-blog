---
title: 分享文稿
sidebar: false
---

<script setup>
import { shareItems } from "@share-items";
</script>

<template v-for="(item, index) in shareItems" :key="item.id">
  <h5 :id="item.id">{{ item.title }}</h5>
  <FigmaEmbed
    :iframeSrc="item.iframeSrc"
    :coverImg="item.coverImg"
    :ratio="item.ratio"
    :title="item.title"
  />
  <br v-if="index < shareItems.length - 1" />
</template>
