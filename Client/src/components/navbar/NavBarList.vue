<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal text-primary flex px-1 text-xl">
      <RouterLink to="/articles" class="px-1 transition-all duration-75 hover:scale-110"
        >المقالات</RouterLink
      >
      <div class="divider divider-horizontal"></div>
      <RouterLink to="/books" class="px-1 transition-all duration-75 hover:scale-110"
        >الكتب</RouterLink
      >
      <div class="divider divider-horizontal"></div>
      <RouterLink to="/" class="px-1 transition-all duration-75 hover:scale-110"
        >الصفحة الرئيسية</RouterLink
      >
    </ul>
  </div>
</template>
