<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: {
    type: String,
    required: true,
  },
  moreLink: {
    type: String,
    default: "",
  },
  moreLabel: {
    type: String,
    default: "查看更多",
  },
});
</script>

<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <RouterLink v-if="moreLink" :to="moreLink" class="more-link" :aria-label="moreLabel">
      <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M15 4.5H33C40.4559 4.5 46.5 10.5441 46.5 18C46.5 25.4559 40.4559 31.5 33 31.5H15C7.54415 31.5 1.5 25.4559 1.5 18C1.5 10.5441 7.54415 4.5 15 4.5Z"
          stroke="var(--blog-c-divider)" />
        <path d="M13 18H31" stroke="currentColor" stroke-width="2" />
        <path d="M34 18C30.6863 18 28 15.3137 28 12" stroke="currentColor" stroke-width="2" />
        <path d="M34 18C30.6863 18 28 20.6863 28 24" stroke="currentColor" stroke-width="2" />
      </svg>
    </RouterLink>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
}

.section-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1.675rem;
  line-height: 2rem;
}

.more-link {
  flex-shrink: 0;
  color: var(--blog-c-link-hover);
}

.more-link svg {
  display: block;
  width: 3rem;
  height: auto;
}

@media (max-width: 720px) {
  .section-title {
    font-size: 1.375rem;
  }

  .more-link svg {
    width: 2.75rem;
  }
}
</style>
