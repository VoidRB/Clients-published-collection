<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/SingularArticle.vue";

const articles: Article[] = [
  { id: 1, name: "article1", synopsis: "article1", body: "article1" },
  { id: 2, name: "article2", synopsis: "article2", body: "article2" },
  { id: 3, name: "article3", synopsis: "article3", body: "article3" },
  { id: 4, name: "article4", synopsis: "article4", body: "article4" },
  { id: 5, name: "article5", synopsis: "article5", body: "article5" },
];
</script>
<template>
  <div class="mt-10 flex-col justify-center gap-4">
    <SingularArticle v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>
