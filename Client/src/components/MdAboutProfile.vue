<script setup lang="ts">
import PrivateCollectionLogin from "@/components/PrivateCollectionLogin.vue";

import { ref } from "vue";
const visibilityState = ref<boolean>(false);
const secretBgColor = ref<string>("bg-accent");

const hideLogin = () => {
  if (visibilityState.value) {
    secretBgColor.value = "bg-accent";
    visibilityState.value = false;
  } else {
    visibilityState.value = true;
    secretBgColor.value = "bg-primary";
  }
};
</script>
<template>
  <section class="flex size-full min-h-screen flex-col justify-start text-center md:hidden">
    <h1 class="text-lg">عن</h1>
    <h1 class="w-full text-2xl font-bold underline underline-offset-8">
      أ.د. عبد الله بن علي الحصين
    </h1>
    <PrivateCollectionLogin v-if="visibilityState" />

    <img
      @click="hideLogin()"
      :class="`${secretBgColor} card bg-accent w-full drop-shadow-md`"
      src="/Portrait.png"
    />
    <div class="card w-full">
      <hr class="divider border-0 px-14" />
      <h1 class="text-secondary w-full text-4xl">السيرة الذاتية</h1>
      <hr class="divider border-0 px-16" />
      <ul class="list-inside">
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
      </ul>
    </div>
    <div class="card to-base-200 h-full w-full bg-linear-to-b from-transparent">
      <hr class="divider border-0 px-14" />
      <h1 class="card text-secondary mt-2 w-full text-center text-4xl">لمحة سريعة</h1>
      <hr class="divider border-0 px-16" />
      <ul class="list-inside">
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
        <li>___________________________</li>
      </ul>
    </div>
  </section>
</template>
