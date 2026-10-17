import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useMediaQuery(query) {
  const matches = ref(false);
  let media;
  const update = () => { matches.value = media.matches; };

  onMounted(() => {
    media = window.matchMedia(query);
    update();
    media.addEventListener('change', update);
  });

  onBeforeUnmount(() => media?.removeEventListener('change', update));
  return matches;
}
