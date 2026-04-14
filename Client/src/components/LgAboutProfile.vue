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

const historyOfEmployment = [
  { id: 0, name: "Title 5", year: "Year 5" },
  { id: 1, name: "Title 4", year: "Year 4" },
  { id: 2, name: "Title 3", year: "Year 3" },
  { id: 3, name: "Title 2", year: "Year 2" },
  { id: 4, name: "Title 1", year: "Year 1" },
];
</script>
<template>
  <section class="mt-10 flex min-h-screen w-full flex-col items-center">
    <h1 class="text-lg">عن</h1>
    <h1 class="w-full text-center text-7xl font-bold">أ.د. عبد الله بن علي الحصين</h1>
    <PrivateCollectionLogin v-if="visibilityState" />
    <div class="flex h-full w-full gap-4 p-10">
      <img
        @click="hideLogin()"
        :class="`${secretBgColor} card h-full w-1/3 drop-shadow-md transition-colors duration-300`"
        src="/Portrait.png"
      />

      <div class="card h-full w-1/3">
        <h1 class="card text-secondary mt-2 w-full justify-center text-center text-4xl">
          السيرة الذاتية
        </h1>
        <hr class="divider border-0 px-14" />
        <ul class="list-inside text-center">
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
      <div
        class="card to-base-300 h-full w-1/3 items-center bg-linear-to-br from-transparent shadow-md"
      >
        <h1
          class="card text-secondary mt-2 w-full justify-center rounded-b-none text-center text-4xl"
        >
          لمحة سريعة
        </h1>
        <hr class="divider border-0 px-14" />
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
    </div>
    <div class="flex w-full flex-col items-center justify-center">
      <hr class="divider border-0 px-14" />
      <h1 class="text-primary w-full text-center text-4xl font-bold">المقولة المفضلة</h1>
      <p class="text-lg">
        ".المرءُ يرحلُ والأثرُ باقٍ، فدوِّنْ خطاك لئلا يمحوها النسيان؛ فما لم يُكتَب، كأنه لم يكن"
      </p>
      <hr class="divider border-0 px-14" />
    </div>
  </section>
  <section class="flex min-h-screen w-full flex-col gap-4 p-10">
    <section class="flex h-1/2 w-full gap-4">
      <div class="card bg-base-200 flex h-full w-2/3 items-center justify-around">
        <h1 class="text-secondary text-2xl">الحياة العملية</h1>
        <ul class="timeline mb-2 drop-shadow-md">
          <li v-for="job in historyOfEmployment" :key="job.id">
            <hr v-if="job.id !== 0" />
            <div class="timeline-start">{{ job.year }}</div>
            <div class="timeline-middle">
              <i class="pi pi-briefcase"></i>
            </div>
            <div class="timeline-end timeline-box">{{ job.name }}</div>
            <hr v-if="job.id !== historyOfEmployment.length - 1" />
          </li>
        </ul>
      </div>
      <div class="bg-base-200 h-full w-1/3"></div>
    </section>
    <section class="card bg-base-300 h-1/2 w-full"></section>
  </section>
</template>
