<script setup lang="ts"></script>
<template>
  <div class="card skeleton bg-base-100 flex w-96 shadow-sm hover:shadow-md">
    <figure class="px-10 pt-10">
      <img class="skeleton h-119 w-85 rounded-xl border-0 text-center" />
    </figure>
    <div class="card-body items-end text-end">
      <h2 class="card-title skeleton h-4 w-40 text-end"></h2>

      <p class="skeleton h-4 w-full text-end"></p>
      <p class="skeleton h-4 w-full text-end"></p>
      <p class="skeleton mt-1 h-4 w-3/4 text-end"></p>
      <div class="card-actions flex flex-col">
        <button class="btn skeleton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </div>
    </div>
  </div>
</template>
