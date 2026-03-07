<script setup lang="ts">
const carouselList = [
  { id: 1, imgSource: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
  {
    id: 2,
    imgSource: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  },
  {
    id: 3,
    imgSource: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  },
  {
    id: 4,
    imgSource: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  },
  { id: 5, imgSource: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" },
  { id: 6, imgSource: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" },
  {
    id: 7,
    imgSource: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  },
];
</script>
<template>
  <div class="carousel carousel-center bg-base-200 rounded-box max-w-full space-x-4 p-4">
    <div v-for="image in carouselList" :key="image.id" class="carousel-item">
      <img :src="image.imgSource" class="rounded-box" />
    </div>
  </div>
</template>
