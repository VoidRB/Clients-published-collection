<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import SingularBook from "@/components/SingularBook.vue";
import { computed, onMounted, ref } from "vue";

import { supabase } from "@/helper/supabase.ts";

const books = ref<Book[]>([]);

onMounted(async () => {
  const { data } = await supabase.from("books").select("*").order("id", { ascending: true });
  books.value = (data as Book[]) || [];
});

const searchQuery = ref("");
const filteredBooks = computed(() => {
  return books.value.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
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
      <div>
        <TransitionGroup
          name="list"
          tag="SingularBook"
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <SingularBook v-for="book in filteredBooks" :key="book.id" :book="book" />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style>
.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px); /* Slides up slightly while fading */
}
</style>
