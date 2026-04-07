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
    <h1 class="bg-base-200 text-lg">عن</h1>
    <h1 class="bg-base-200 w-full text-2xl font-bold">أ.د. عبد الله بن علي الحصين</h1>

    <PrivateCollectionLogin v-if="visibilityState" />

    <img
      @click="hideLogin()"
      :class="`${secretBgColor} card w-full drop-shadow-md`"
      src="/Portrait.png"
    />
    <div
      class="from-base-200 flex w-full flex-col items-center justify-center bg-linear-to-b to-transparent"
    >
      <hr class="divider border-0 px-14" />
      <h1 class="text-primary w-full text-center text-4xl font-bold">المقولة المفضلة</h1>
      <p class="text-lg leading-tight">
        ".المرءُ يرحلُ والأثرُ باقٍ، فدوِّنْ خطاك لئلا يمحوها النسيان؛ فما لم يُكتَب، كأنه لم يكن"
      </p>
      <hr class="divider border-0 px-14" />
    </div>
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
