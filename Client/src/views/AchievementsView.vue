<script setup lang="ts"></script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div class="bg-base-300 mb-4 flex h-1/2 w-full flex-row justify-between">
      <img draggable="false" src="/portraitRed.svg" alt="" class="h-96 max-w-1/2" />
      <div class="mt-4 ml-4">
        <h1 class="text-primary-content text-3xl">أ.د. عبد الله بن علي الحصين</h1>
        <p class="text-secondary">test</p>
      </div>
    </div>
    <div
      class="*:card *:bg-base-200 grid size-full grid-cols-2 gap-4 p-4 *:drop-shadow-md *:transition-all *:duration-75 *:hover:scale-105 lg:grid-cols-4"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="items-center justify-center border-2 border-amber-300 p-4 text-center"
      >
        <i class="pi pi-trophy text-2xl"></i>
        <h1 class="text-primary text-2xl">Achievement 1</h1>
        <p class="text-secondary text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam velit, id nisi magni
          deserunt iusto voluptatem nulla explicabo, rerum laboriosam praesentium porro provident
          eveniet perferendis dolores, recusandae possimus. Quo, nobis?
        </p>
      </div>
    </div>
  </div>
</template>
