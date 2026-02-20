<script setup lang="ts">
import FullArticleSkeleton from "@/components/skeletons/FullArticleSkeleton.vue";
import { supabase } from "@/helper/supabase";
import type Article from "@/interfaces/articleInterface";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const article = ref<Article>();
const route = useRoute();
const loading = ref<boolean>(true);

onMounted(async () => {
  try {
    const data = await supabase.from("Articles").select("*").eq(`slug`, route.params.slug).single();
    article.value = data.data;
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <Transition v-if="loading"><FullArticleSkeleton /></Transition>
  <Transition name="fade">
    <div v-if="article && article.id > 0" class="mt-10 flex w-full flex-col px-4">
      <h1 class="mb-3 text-5xl font-bold">{{ article?.title }}</h1>
      <h1 class="text-neutral">{{ article?.date_written }}</h1>
      <h1 class="text-neutral">{{ article?.content.author }}</h1>
      <hr class="divider flex border-0" />
      <p class="justify-items-center text-justify">{{ article?.content.body }}</p>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>
