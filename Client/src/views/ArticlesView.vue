<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/singularComponents/SingularArticle.vue";
import SingularArticleSkeleton from "@/components/skeletons/SingularArticleSkeleton.vue";

import { computed, onMounted, ref } from "vue";

import { supabase } from "@/helper/supabase";
import { useToast } from "vue-toastification";

const toast = useToast();
const articles = ref<Article[]>([]);
const loading = ref<boolean>(true);
const apiSuccess = ref(true);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("Articles")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    articles.value = (data as Article[]) || [];
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    apiSuccess.value = false;
  } finally {
    if (apiSuccess.value) {
      loading.value = false;
    } else {
      toast.error("Something Went wrong!");
      loading.value = true;
    }
  }
});

const searchQuery = ref("");
const filteredArticles = computed(() => {
  return articles.value.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
  <div class="my-10 flex w-full flex-col">
    <div class="mt-16"></div>
    <div class="flex w-full justify-center">
      <label class="input w-1/2 transition-all duration-75 has-focus:scale-101 has-focus:shadow-xl">
        <i class="pi pi-search"></i>
        <input
          v-model="searchQuery"
          type="text"
          required
          placeholder="ابحث"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minlength="3"
          maxlength="30"
        />
      </label>
    </div>
    <div v-if="loading" class="mt-10 h-fit w-full flex-col items-center justify-center gap-4 px-10">
      <SingularArticleSkeleton v-for="n in 6" :key="n" />
    </div>
    <TransitionGroup
      name="list"
      tag="div"
      class="mt-10 h-fit w-full flex-col items-center justify-center gap-4 px-10"
    >
      <div v-for="article in filteredArticles" :key="article.id">
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
  transform: translateY(20px);
}
</style>
