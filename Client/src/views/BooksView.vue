<script setup lang="ts">
import type Book from "@/interfaces/bookInterface";
import SingularBook from "@/components/singularComponents/SingularBook.vue";
import SingularBookSkeleton from "@/components/skeletons/SingularBookSkeleton.vue";

import { computed, onMounted, ref } from "vue";

import { supabase } from "@/helper/supabase.ts";
import { useToast } from "vue-toastification";

const toast = useToast();
const books = ref<Book[]>([]);
const loading = ref<boolean>(true);
const apiSuccess = ref(true);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("books")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    books.value = (data as Book[]) || [];
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    apiSuccess.value = false;
  } finally {
    if (apiSuccess.value) {
      loading.value = false;
    } else {
      toast.error("Something Went wrong!");
      loading.value = true;
    }
  }
});

const searchQuery = ref("");
const filteredBooks = computed(() => {
  return books.value.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
  <div class="my-10 flex w-full flex-col">
    <div class="flex w-full justify-center">
      <label class="input w-1/2 transition-all duration-75 has-focus:scale-101 has-focus:shadow-xl">
        <i class="pi pi-search"></i>
        <input
          v-model="searchQuery"
          type="text"
          required
          placeholder="ابحث"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minlength="3"
          maxlength="30"
        />
      </label>
    </div>
    <div class="mt-10 flex items-center justify-center">
      <div>
        <TransitionGroup
          v-if="loading"
          name="list"
          tag="SingularBookSkeleton"
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <SingularBookSkeleton v-for="n in 6" :key="n" />
        </TransitionGroup>
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
  transform: translateY(20px);
}
</style>
