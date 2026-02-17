<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
      <i class="pi pi-bars"></i>
    </div>
    <ul
      tabindex="-1"
      class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 items-center justify-center p-2 text-center shadow"
    >
      <li><RouterLink to="/" class="text-2xl">الصفحة الرئيسية</RouterLink></li>
      <li><RouterLink to="/books" class="text-2xl">الكتب</RouterLink></li>
      <li><RouterLink to="/articles" class="text-2xl">المقالات</RouterLink></li>
    </ul>
  </div>
</template>
