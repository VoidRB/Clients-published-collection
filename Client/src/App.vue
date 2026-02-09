<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="">
    <NavBar v-if="route.name !== 'home'" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>
