<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import axios from "axios";
import { ref } from "vue";

const props = defineProps<{
  book: Book;
}>();

const apiError = ref<string | object>("");

const getBook = async (bookId: number) => {
  try {
    const response = await axios.get("api/get-book/:bookId", { params: { bookId: bookId } });
    //add a way to terminate this request well
    console.log(response.data);
    apiError.value = "";
  } catch (error) {
    if (axios.isAxiosError(error)) {
      apiError.value = error.response?.data?.error;
    } else {
      apiError.value = "An unexpected error occurred";
    }
    return error;
  }
};
</script>
<template>
  <div class="card bg-base-100 flex w-96 shadow-sm hover:shadow-md">
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
