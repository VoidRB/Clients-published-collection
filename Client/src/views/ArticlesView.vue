<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import SingularArticle from "@/components/SingularArticle.vue";
import { computed, onMounted, ref } from "vue";
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

const testArticles = ref([
  { id: 1, name: "article name 1", synopsis: "article synopsis 1", body: "article body 1" },
  { id: 2, name: "article name 2", synopsis: "article synopsis 2", body: "article body 2" },
  { id: 3, name: "article name 3", synopsis: "article synopsis 3", body: "article body 3" },
  { id: 4, name: "article name 4", synopsis: "article synopsis 4", body: "article body 4" },
  { id: 5, name: "article name 5", synopsis: "article synopsis 5", body: "article body 5" },
]);

const searchQuery = ref("");
const filteredArticles = computed(() => {
  return testArticles.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
<template>
  <div class="mt-10 flex w-full">
    <div class="flex w-full justify-center text-right">
      <div class="w-1/2">
        <label class="input w-full">
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
    </div>
  </div>
  <div class="mt-10 h-fit w-full flex-col items-center justify-center gap-4 px-14">
    <SingularArticle v-for="article in filteredArticles" :key="article.id" :article="article" />
  </div>
</template>
