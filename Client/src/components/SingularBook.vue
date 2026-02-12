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
  <div
    class="card bg-base-content card-border image-full m-2 w-72 text-end shadow-sm transition-all duration-75 hover:scale-110 lg:w-96"
  >
    <figure>
      <img class="max-w-2xs object-cover" :src="props.book.cover" :alt="props.book.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-primary justify-end text-3xl">{{ props.book.name }}</h2>
      <p class="text-primary-content justify-end text-2xl">
        {{ props.book.synopsis }}
      </p>
      <div class="card-actions justify-start">
        <button @click="getBook(props.book.id)" class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
