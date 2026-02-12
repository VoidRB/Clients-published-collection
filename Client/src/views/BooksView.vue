<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import SingularBook from "@/components/SingularBook.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const books = ref<Book[]>();
const apiError = ref<Object>();

onMounted(async () => {
  try {
    const repsonse = await axios.get("");
    books.value = repsonse.data;
    apiError.value = "";
  } catch (error: unknown) {
    apiError.value = error.repsonse.data.error;
    return error;
  }
});

const testBooks: Book[] = [
  {
    id: 1,
    name: "والدي",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: "",
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
];
</script>
<template>
  <div class="mt-10 grid grid-cols-1 grid-rows-2 justify-center gap-4 md:grid-cols-3">
    <SingularBook v-for="book in testBooks" :key="book.id" :book="book" />
  </div>
</template>
