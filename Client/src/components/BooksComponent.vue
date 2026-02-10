<script setup lang="ts">
import walidiPng from "../assets/bookCovers/Walidi.png";
const books: { id: number; name: string; synopsis: string; cover: string }[] = [
  {
    id: 1,
    name: "والدي",
    synopsis:
      "المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.",
    cover: walidiPng,
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
  <div
    v-for="book in books"
    :key="book.id"
    class="card bg-base-100 card-border image-full m-2 w-96 shadow-sm"
  >
    <figure>
      <img class="" :src="book.cover" :alt="book.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title justify-end text-end">{{ book.name }}</h2>
      <p class="justify-end text-end">
        {{ book.synopsis }}
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">أقرأ</button>
      </div>
    </div>
  </div>
</template>
