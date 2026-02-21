<script setup lang="ts">
import { supabase } from "@/helper/supabase";
import type Book from "@/interfaces/bookInterface";

const props = defineProps<{
  book: Book;
}>();

const getBook = async (bookId: number) => {
  const data = await supabase.from("books").select("file_path").eq(`id`, bookId).single();
  window.open(data.data?.file_path);
};
</script>
<template>
  <div
    class="card bg-base-100 flex w-96 font-extrabold shadow-sm transition-shadow duration-75 hover:shadow-xl"
  >
    <figure class="px-10 pt-10">
      <img
        :src="props.book.cover_url"
        :alt="props.book.title"
        class="h-119 w-85 rounded-xl text-center"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.book.title }}</h2>
      <p class="text-accent text-justify">
        {{ props.book.metadata?.synopsis }}
      </p>
      <p class="text-neutral">{{ props.book.metadata?.author }}</p>
      <p class="text-neutral">{{ props.book.metadata?.date_written }}</p>
      <div class="card-actions flex justify-end">
        <button @click="getBook(props.book.id)" class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
