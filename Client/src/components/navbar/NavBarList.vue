<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal flex items-center justify-center text-xl">
      <li>
        <RouterLink to="/books" class="duration-75 hover:scale-110">الكتب</RouterLink>
      </li>
      <li>
        <RouterLink to="/articles" class="duration-75 hover:scale-110">المقالات</RouterLink>
      </li>
      <li>
        <RouterLink to="/pictures" class="duration-75 hover:scale-110">الصور</RouterLink>
      </li>
    </ul>
  </div>
</template>
