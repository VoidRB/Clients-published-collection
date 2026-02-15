<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/SingularArticle.vue";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

import { articlesArray } from "@/assets/testArrays";

const articles = ref<Article[]>();
const apiError = ref<Object>();

onMounted(async () => {
  try {
    const repsonse = await axios.get("");
    articles.value = repsonse.data;
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

const testArticles = ref(articlesArray);

const searchQuery = ref("");
const filteredArticles = computed(() => {
  return testArticles.value.filter((article) =>
    article.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
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
  <div class="mt-10 h-fit w-full flex-col items-center justify-center gap-4 px-14">
    <SingularArticle v-for="article in filteredArticles" :key="article.id" :article="article" />
  </div>
</template>
