<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavBarDropdown from "./NavBarDropdown.vue";
import NavBarList from "./NavBarList.vue";
</script>
<template>
  <div class="navbar fixed top-0 isolate z-50 shadow-sm backdrop-blur-sm">
    <div class="navbar-start">
      <RouterLink
        to="/"
        class="mr-4 flex items-center gap-2 text-2xl text-nowrap transition-all duration-75 hover:scale-110 hover:cursor-pointer hover:drop-shadow-2xl"
        ><img draggable="false" src="/logo.svg" class="size-6" />أرشيف الحصين</RouterLink
      >
    </div>
    <div class="navbar-end">
      <NavBarDropdown class="block lg:hidden" /><NavBarList class="hidden lg:block" />
    </div>
  </div>
</template>
