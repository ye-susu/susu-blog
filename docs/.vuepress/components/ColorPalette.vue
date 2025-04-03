<script setup>
import { computed } from "vue";

const props = defineProps({
  // colorsGroups 为多组颜色数组
  colorsGroups: {
    type: Array,
    required: true,
  },
  // gapSpacing 为色块之间的间距
  gapSpacing: {
    type: Boolean,
    default: false,
  },
});

// 计算每组颜色的宽度，确保色块平均填充整行
const getBoxWidth = (group) => `calc(100% / ${group.length})`;
</script>

<template>
  <div class="color-palette">
    <div
      v-for="(group, groupIndex) in colorsGroups"
      :key="groupIndex"
      class="color-group"
      :class="{ spacing: gapSpacing }"
    >
      <div
        v-for="(color, index) in group"
        :key="color.value || color.gradient || index"
        class="color-box"
        :style="{
          background: color.gradient || color.value,
          color: color.textColor || '#FFFFFF',
          width: getBoxWidth(group),
        }"
      >
        <span v-if="color.name">{{ color.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-palette {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.color-group {
  display: flex;
  width: 100%;
  gap: 0;
}

.spacing {
  gap: 1rem !important; /* 仅当 gapSpacing = true 时，添加间距 */
}

.color-box {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-size: 0.6875rem;
}
</style>