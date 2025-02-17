<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => {
      return value.every(
        (item) =>
          typeof item.src === "string" &&
          typeof item.link === "string" &&
          (typeof item.alt === "string" || typeof item.alt === "undefined")
      );
    },
  },
});
const router = useRouter();
function navigateTo(link) {
  if (link) {
    router.push(link).catch((err) => {
      if (err.name !== "NavigationDuplicated") {
        console.error(err);
      }
    });
  }
}
</script>

<template>
  <div class="my-home-nav">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="image-link"
      @click="navigateTo(item.link)"
    >
      <img :src="item.src" :alt="item.alt || 'Nav Image'" class="image-item" />
    </div>
  </div>
</template>
<style scoped>
.my-home-nav {
  display: flex;
  gap: 2.875rem;
  justify-content: center;
}
.image-item {
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.image-item:hover {
  transform: scale(1.08);
}
@media (max-width: 768px) {
  .my-home-nav {
    flex-wrap: wrap;
    gap: 0rem;
  }
  .image-link {
    width: 64%;
  }
}
</style>