<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavBarDropdown from "./NavBarDropdown.vue";
import NavBarList from "./NavBarList.vue";
</script>
<template>
  <div class="navbar fixed top-0 z-50 shadow-sm backdrop-blur-md">
    <div class="navbar-start">
      <RouterLink
        to="/"
        class="mr-4 flex items-center gap-2 text-2xl transition-all duration-75 hover:scale-110 hover:cursor-pointer hover:drop-shadow-2xl"
        ><img draggable="false" src="/logo.svg" class="size-6" />المرجع</RouterLink
      >
    </div>
    <div class="navbar-end">
      <NavBarDropdown class="block lg:hidden" /><NavBarList class="hidden lg:block" />
    </div>
  </div>
</template>
