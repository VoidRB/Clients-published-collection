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
  <section class="mt-10 hidden h-screen w-full flex-col items-center md:flex">
    <h1 @click="hideLogin()" class="text-lg">عن</h1>
    <h1 class="w-full text-center text-7xl font-bold">أ.د. عبد الله بن علي الحصين</h1>
    <PrivateCollectionLogin v-if="visibilityState" />
    <div class="flex h-screen w-full gap-4 p-10">
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
  <section class="hidden min-h-screen w-full flex-col gap-4 p-10 md:flex">
    <section class="flex h-full w-full gap-4">
      <div class="card bg-base-200 flex h-full w-2/3 items-center justify-center">
        <ul class="timeline mb-2 drop-shadow-md">
          <li>
            <div class="timeline-start">Year 1</div>
            <div class="timeline-middle">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="timeline-end timeline-box">Title 1</div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">Year 2</div>
            <div class="timeline-middle">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="timeline-end timeline-box">Title 2</div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">Year 3</div>
            <div class="timeline-middle">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="timeline-end timeline-box">Title 3</div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">Year 4</div>
            <div class="timeline-middle">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="timeline-end timeline-box">Title 4</div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">Year 5</div>
            <div class="timeline-middle">
              <i class="pi pi-check-circle"></i>
            </div>
            <div class="timeline-end timeline-box">Title 5</div>
          </li>
        </ul>
      </div>
      <div class="card h-full w-1/3 shadow-md">
        <img src="/portrait2noBg.png" alt="" class="bg-accent bg-cover bg-no-repeat" />
      </div>
    </section>
    <section class="card bg-base-300 h-full w-full"></section>
  </section>
</template>
