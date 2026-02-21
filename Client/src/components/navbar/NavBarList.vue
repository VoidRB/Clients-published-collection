<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal text-primary flex px-1 text-xl transition-all">
      <RouterLink to="/" class="duration-75 hover:scale-110">الصفحة الرئيسية</RouterLink>
      <hr class="divider divider-horizontal border-0" />
      <RouterLink to="/books" class="duration-75 hover:scale-110">الكتب</RouterLink>
      <hr class="divider divider-horizontal w-1 border-0" />
      <RouterLink to="/articles" class="duration-75 hover:scale-110">المقالات</RouterLink>
    </ul>
  </div>
</template>
