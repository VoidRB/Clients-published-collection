<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal flex px-4 text-xl mix-blend-difference transition-all">
      <!-- <RouterLink to="/" class="duration-75 hover:scale-110">الصفحة الرئيسية</RouterLink> -->
      <!-- <hr class="divider divider-horizontal border-0" /> -->
      <RouterLink to="/books" class="duration-75 hover:scale-110">الكتب</RouterLink>
      <hr class="divider divider-horizontal w-1 border-0" />
      <RouterLink to="/articles" class="duration-75 hover:scale-110">المقالات</RouterLink>
      <hr class="divider divider-horizontal w-1 border-0" />
      <RouterLink to="/pictures" class="duration-75 hover:scale-110">الصور</RouterLink>
      <!-- <hr class="divider divider-horizontal w-1 border-0" />
      <RouterLink to="/achievements" class="duration-75 hover:scale-110">الإنجازات</RouterLink> -->
    </ul>
  </div>
</template>
