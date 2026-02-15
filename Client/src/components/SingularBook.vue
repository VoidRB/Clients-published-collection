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
  <div class="card bg-base-100 w-96 shadow-sm hover:shadow-md">
    <figure class="px-10 pt-10">
      <img :src="props.book.cover" :alt="props.book.name" class="h-119 w-85 rounded-xl" />
    </figure>
    <div class="card-body items-end text-end">
      <h2 class="card-title">{{ props.book.name }}</h2>
      <p class="text-accent text-end">
        {{ props.book.synopsis }}
      </p>
      <p class="text-neutral text-end">
        {{ props.book.author }}
      </p>
      <p class="text-neutral text-end">
        {{ props.book.date }}
      </p>
      <div class="card-actions">
        <button @click="getBook(props.book.id)" class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
