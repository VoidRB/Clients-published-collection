<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";

const props = defineProps<{
  book: Book;
}>();

const getBook = async (bookId: number) => {
  console.log(bookId);
};
</script>
<template>
  <div class="card bg-base-100 flex w-96 shadow-sm hover:shadow-md">
    <figure class="px-10 pt-10">
      <img
        :src="props.book.cover_url"
        :alt="props.book.title"
        class="h-119 w-85 rounded-xl text-center"
      />
    </figure>
    <div class="card-body items-end text-end">
      <h2 class="card-title">{{ props.book.title }}</h2>
      <p class="text-accent text-end">
        {{ props.book.metadata?.synopsis }}
      </p>
      <p class="text-neutral text-end">{{ props.book.metadata?.author }}</p>
      <p class="text-neutral text-end">{{ props.book.metadata?.date_written }}</p>
      <div class="card-actions">
        <button @click="getBook(props.book.id)" class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
