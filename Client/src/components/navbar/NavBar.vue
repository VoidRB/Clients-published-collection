<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavBarDropdown from "./NavBarDropdown.vue";
import NavBarList from "./NavBarList.vue";
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <NavBarDropdown class="block sm:hidden" /><NavBarList class="hidden sm:block" />
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
