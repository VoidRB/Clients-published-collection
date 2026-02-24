<script setup lang="ts">
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
  <div class="my-10 flex h-full w-full flex-col items-center gap-4">
    <label class="swap swap-flip top-0 size-12">
      <input type="checkbox" @click="hideLogin" />

      <img src="/portraitRed.svg" alt="" class="swap-on" />

      <img src="/portraitBlack.svg" alt="" class="swap-off" />
    </label>
    <PrivateCollectionLogin v-if="visibilityState" />
  </div>
</template>
