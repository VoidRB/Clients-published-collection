<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";

const props = defineProps<{
  book: Book;
}>();

const getBook = (bookId: number) => {
  console.log(bookId);
};
</script>
<template>
  <div class="card bg-base-300 card-border image-full m-2 w-72 shadow-sm lg:w-96">
    <figure>
      <img class="max-w-2xs" :src="props.book.cover" :alt="props.book.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-primary justify-end text-end">{{ props.book.name }}</h2>
      <p class="text-secondary-content justify-end text-end text-2xl">
        {{ props.book.synopsis }}
      </p>
      <div class="card-actions justify-end">
        <button @click="getBook(props.book.id)" class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
