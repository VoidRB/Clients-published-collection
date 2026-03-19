<script setup lang="ts">
import LgAboutProfile from "@/components/LgAboutProfile.vue";
import MdAboutProfile from "@/components/MdAboutProfile.vue";
import PrivateCollectionLogin from "@/components/PrivateCollectionLogin.vue";

import { ref } from "vue";

const visibilityState = ref<boolean>(false);

const hideLogin = () => {
  if (visibilityState.value) {
    visibilityState.value = false;
  } else {
    visibilityState.value = true;
  }
};
</script>
<template>
  <div class="mt-16"></div>
  <div class="flex w-full flex-col">
    <LgAboutProfile />
    <MdAboutProfile class="" />
  </div>
</template>
