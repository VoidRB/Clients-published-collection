<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import SingularBook from "@/components/SingularBook.vue";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

import { booksArray } from "@/assets/testArrays";

const books = ref<Book[]>();
const apiError = ref<Object>();

onMounted(async () => {
  try {
    const repsonse = await axios.get("/api/get-books");
    books.value = repsonse.data;
    apiError.value = "";
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      apiError.value = error.response?.data?.error;
    } else {
      apiError.value = "An unexpected error occurred";
    }
    return error;
  }
});

const testBooks = ref(booksArray);

const searchQuery = ref("");
const filteredBooks = computed(() => {
  return testBooks.value.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
  <div class="mt-10 flex w-full flex-col">
    <div class="flex w-full justify-center text-right">
      <label class="input w-1/2">
        <input
          v-model="searchQuery"
          type="text"
          required
          placeholder="ابحث"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minlength="3"
          maxlength="30"
          title="Only letters, numbers or dash"
          class="text-right"
        />
        <i class="pi pi-search"></i>
      </label>
    </div>
    <div class="mt-10 flex items-center justify-center">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <SingularBook v-for="book in filteredBooks" :key="book.id" :book="book" />
      </div>
    </div>
  </div>
</template>
