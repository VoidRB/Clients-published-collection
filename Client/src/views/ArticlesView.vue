<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/SingularArticle.vue";
import { computed, onMounted, ref } from "vue";

import { supabase } from "@/helper/supabase";

const articles = ref<Article[]>([]);

onMounted(async () => {
  const { data } = await supabase.from("Articles").select("*").order("id", { ascending: true });
  articles.value = (data as Article[]) || [];
  console.log(articles.value);
});

const searchQuery = ref("");
const filteredArticles = computed(() => {
  return articles.value.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
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
    <TransitionGroup
      name="list"
      tag="div"
      class="mt-10 h-fit w-full flex-col items-center justify-center gap-4 px-14"
      ><div v-for="article in filteredArticles" :key="article.id">
        <SingularArticle :article="article" />
      </div>
    </TransitionGroup>
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
