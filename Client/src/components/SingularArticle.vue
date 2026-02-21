<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import router from "@/router";

const props = defineProps<{
  article: Article;
}>();

const readArticle = (articleName: string) => {
  const formattedArticleName = articleName.replace(/ /g, "-");
  router.push(`/article/${formattedArticleName}`);
};
</script>
<template>
  <hr class="divider border-0 px-2" />
  <div class="max flex h-auto w-full flex-row px-4">
    <article class="flex h-2/3">
      <div class="flex-col">
        <h1 class="text-2xl">{{ props.article.title }}</h1>
        <p class="text-accent text-lg">{{ props.article.synopsis }}</p>
        <p class="text-neutral">{{ props.article.content.author }}</p>
        <p class="text-neutral">{{ props.article.date_written }}</p>
      </div>
    </article>
    <div class="mr-auto flex items-end justify-end">
      <button @click="readArticle(props.article.slug)" class="btn btn-primary">
        أقرأ المَقَال
      </button>
    </div>
  </div>
</template>
