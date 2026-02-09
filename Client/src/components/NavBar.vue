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
          class="menu menu-sm items-center justify-center dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><RouterLink to="/" class="">الصفحة الرئيسية</RouterLink></li>
          <li><RouterLink to="/about" class="">عن الموقع إلكتروني</RouterLink></li>
          <li><RouterLink to="/books" class="">كتب</RouterLink></li>
          <li><RouterLink to="/articles" class="">مقالات</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <a class="btn btn-ghost text-xl">والدي</a>
    </div>
  </div>
</template>
