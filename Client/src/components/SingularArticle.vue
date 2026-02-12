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
  <hr class="divider border-0" />
  <div class="h-32 w-full flex-col px-2">
    <article class="flex h-2/3 items-baseline justify-end">
      <div class="flex-col">
        <h1>{{ props.article.name }}</h1>
        <p>{{ props.article.synopsis }}</p>
      </div>
    </article>
    <button @click="readArticle(props.article.id)" class="btn btn-primary">read</button>
  </div>
</template>
