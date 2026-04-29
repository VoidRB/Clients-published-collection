<script setup lang="ts"></script>
<template>
  <div class="card skeleton bg-base-100 flex w-full shadow-sm hover:shadow-md">
    <figure class="px-10 pt-10">
      <div class="skeleton border-base-100 h-119 w-85 border-2"></div>
    </figure>
    <div class="card-body">
      <h2 class="card-title skeleton h-4 w-40"></h2>

      <p class="skeleton h-4 w-full"></p>
      <p class="skeleton h-4 w-full"></p>
      <p class="skeleton h-4 w-full"></p>
      <p class="skeleton mt-1 h-4 w-3/4"></p>
      <div class="card-actions flex flex-col items-end">
        <div
          class="btn skeleton border-0 text-transparent shadow-none text-shadow-none hover:cursor-default hover:shadow-none active:cursor-default"
        >
          تحميل
        </div>
      </div>
    </div>
  </div>
</template>
