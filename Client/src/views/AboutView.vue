<script setup lang="ts">
import LgAboutProfile from "@/components/LgAboutProfile.vue";
import MdAboutProfile from "@/components/MdAboutProfile.vue";

const windowWidth = window.innerWidth;
</script>
<template>
  <div class="flex w-full flex-col">
    <div class="mt-16"></div>
    <LgAboutProfile v-if="windowWidth > 768" />
    <MdAboutProfile v-else />
  </div>
</template>
