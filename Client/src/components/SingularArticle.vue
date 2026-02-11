<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";

const props = defineProps<{
  article: Article;
}>();

const readArticle = (articleId: number) => {
  console.log(articleId);
};
</script>
<template>
  <div>
    {{ props.article.id }}
    <button @click="readArticle(props.article.id)"></button>
  </div>
</template>
