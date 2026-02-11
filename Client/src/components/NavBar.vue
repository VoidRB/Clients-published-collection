<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <i class="pi pi-bars"></i>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 items-center justify-center p-2 shadow"
        >
          <li class=""><RouterLink to="/" class="text-2xl">الصفحة الرئيسية</RouterLink></li>
          <li><RouterLink to="/books" class="text-2xl">الكتب</RouterLink></li>
          <li><RouterLink to="/articles" class="text-2xl">المقالات</RouterLink></li>
          <li><RouterLink to="/about" class="text-2xl">عن الموقع إلكتروني</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <RouterLink
        to="/"
        class="mr-4 text-2xl transition-all duration-75 hover:cursor-pointer hover:text-3xl hover:shadow-2xl"
        >المرجع</RouterLink
      >
    </div>
  </div>
</template>
