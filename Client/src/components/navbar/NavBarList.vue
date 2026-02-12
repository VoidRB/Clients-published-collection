<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal flex px-1 text-2xl">
      <RouterLink to="/articles" class="px-1">المقالات</RouterLink>
      <div class="divider divider-horizontal"></div>
      <RouterLink to="/books" class="px-1">الكتب</RouterLink>
      <div class="divider divider-horizontal"></div>
      <RouterLink to="/" class="px-1">الصفحة الرئيسية</RouterLink>
    </ul>
  </div>
</template>
