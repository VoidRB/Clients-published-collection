<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/navbar/NavBar.vue";
import BottomFooter from "./components/BottomFooter.vue";
</script>

<template>
  <div class="flex h-screen w-full flex-1 flex-col items-center">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <BottomFooter />
  </div>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
