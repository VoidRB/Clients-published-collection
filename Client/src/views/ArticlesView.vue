<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/SingularArticle.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

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

const testArticles: Article[] = [
  { id: 1, name: "article name 1", synopsis: "article synopsis 1", body: "article body 1" },
  { id: 2, name: "article name 2", synopsis: "article synopsis 2", body: "article body 2" },
  { id: 3, name: "article name 3", synopsis: "article synopsis 3", body: "article body 3" },
  { id: 4, name: "article name 4", synopsis: "article synopsis 4", body: "article body 4" },
  { id: 5, name: "article name 5", synopsis: "article synopsis 5", body: "article body 5" },
];
</script>
<template>
  <div class="mt-10 w-full flex-col gap-4">
    <SingularArticle v-for="article in testArticles" :key="article.id" :article="article" />
  </div>
</template>
