<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";

const props = defineProps<{
  article: Article;
}>();
</script>
<template>
  <hr class="divider border-0" />
  <div class="max flex h-auto w-full flex-row px-4">
    <article class="flex h-2/3">
      <div class="flex-col">
        <h1 class="text-2xl font-bold text-shadow-xs">{{ props.article.title }}</h1>
        <p class="text-accent text-lg">{{ props.article.synopsis }}</p>
        <p class="text-neutral">{{ props.article.content.author }}</p>
        <p class="text-neutral">{{ props.article.date_written }}</p>
      </div>
    </article>
    <div class="mr-auto flex items-end justify-end">
      <RouterLink :to="`/article/${props.article.slug}`" class="btn btn-primary">
        أقرأ المَقَال
      </RouterLink>
    </div>
  </div>
</template>
