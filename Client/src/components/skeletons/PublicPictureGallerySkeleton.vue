<script setup lang="ts">
const props = defineProps<{
  skeletonNumber: number;
}>();
const switchSize = (number: number) => {
  let height = "h-52";
  switch (number) {
    case 1:
      height = "h-52";
      break;
    case 2:
      height = "h-96";
      break;
    case 3:
      height = "h-56";
      break;
    case 4:
      height = "h-80";
      break;
    case 5:
      height = "h-80";
      break;
    case 6:
      height = "h-72";
      break;
    case 7:
      height = "h-64";
      break;
    case 8:
      height = "h-92";
      break;
    case 9:
      height = "h-52";
      break;

    default:
      break;
  }
  return height;
};
</script>
<template>
  <div class="break-inside-avoid">
    <div
      draggable="false"
      :class="`${switchSize(props.skeletonNumber)} skeleton w-full rounded-none transition-all duration-100`"
    ></div>
  </div>
</template>
