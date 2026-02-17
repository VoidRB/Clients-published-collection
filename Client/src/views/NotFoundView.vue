<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="mt-16 flex h-full w-full flex-col items-center justify-center gap-6 select-none">
    <h1 class="text-center text-6xl">
      <span class="text-primary">Error: 404</span> | للأسف، لم يتم العثور على الصفحة
    </h1>
    <RouterLink to="/" class="btn btn-primary py-10 text-3xl"
      >العودة إلى الصفحة الرئيسية</RouterLink
    >
  </div>
</template>
