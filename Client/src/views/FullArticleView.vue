<script setup lang="ts">
import { supabase } from "@/helper/supabase";
import type Article from "@/interfaces/articleInterface";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const article = ref<Article>();
const route = useRoute();

onMounted(async () => {
  const data = await supabase.from("Articles").select("*").eq(`slug`, route.params.slug).single();
  article.value = data.data;
});
</script>
<template>
  <div class="mt-10 flex w-full flex-col items-end justify-end px-4 text-end">
    <h1 class="mb-3 text-5xl font-bold">{{ article?.title }}</h1>
    <h1 class="text-neutral">{{ article?.date_written }}</h1>
    <h1 class="text-neutral">{{ article?.content.author }}</h1>
    <hr class="divider flex border-0" />
    <p class="justify-items-center">{{ article?.content.body }}</p>
  </div>
</template>
