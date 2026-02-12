<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavBarDropdown from "./NavBarDropdown.vue";
import NavBarList from "./NavBarList.vue";
</script>
<template>
  <div class="navbar bg-base-200 shadow-sm">
    <div class="navbar-start">
      <NavBarDropdown class="block sm:hidden" /><NavBarList class="hidden sm:block" />
    </div>
    <div class="navbar-end">
      <RouterLink
        to="/"
        class="mr-4 flex items-center gap-2 text-2xl transition-all duration-75 hover:scale-110 hover:cursor-pointer hover:drop-shadow-2xl"
        >المرجع<img src="/logo.svg" class="size-6"
      /></RouterLink>
    </div>
  </div>
</template>
