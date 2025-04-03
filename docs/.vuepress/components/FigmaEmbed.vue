<script setup>
import { computed } from "vue";
defineProps({
  url: {
    type: String,
    required: true,
  },
});

const embedUrl = computed(() => {
  if (!/^https:\/\/www\.figma\.com\/file\//.test(props.url)) {
    console.warn("Invalid Figma URL");
    return "";
  }
  return props.url.replace(
    "/file/",
    "/embed?embed_host=share&url=https://www.figma.com/file/"
  );
});
</script>