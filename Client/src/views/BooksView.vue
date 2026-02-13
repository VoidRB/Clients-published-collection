<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import SingularBook from "@/components/SingularBook.vue";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

import cover from "@/assets/bookCovers/cover.jpeg";

const books = ref<Book[]>();
const apiError = ref<Object>();

onMounted(async () => {
  try {
    const repsonse = await axios.get("");
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

const testBooks = ref([
  {
    id: 1,
    name: "والدي",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: cover,
  },
  {
    id: 2,
    name: "Book 1",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
  },
  {
    id: 3,
    name: "Book 2",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
  },
  {
    id: 4,
    name: "Book 3",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
  },
  {
    id: 5,
    name: "Book 4",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
  },
  {
    id: 6,
    name: "Book 5",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
  },
]);

const searchQuery = ref("");
const filteredBooks = computed(() => {
  return testBooks.value.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
  <div class="mt-10 flex w-full">
    <div class="mt-10 flex w-full">
      <div class="flex w-full justify-center text-right">
        <div class="w-1/2">
          <label class="input w-full">
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
      </div>
    </div>
  </div>
  <div class="mt-10 grid grid-cols-1 grid-rows-2 justify-center gap-4 md:grid-cols-3">
    <SingularBook v-for="book in filteredBooks" :key="book.id" :book="book" />
  </div>
</template>
