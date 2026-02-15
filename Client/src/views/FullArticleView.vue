<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const apiError = ref<Object>();
const article = ref<Article>();

onMounted(async () => {
  try {
    const response = await axios.get("api/article/:article", {
      params: { article: route.params.name },
    });
    article.value = response.data;
    console.log(response);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      apiError.value = error.response?.data?.error;
    } else {
      apiError.value = "An unexpected error occurred";
    }
    return error;
  }
});

article.value = {
  id: 1,
  name: "تاريخ الحضارة الإسلامية",
  synopsis: "نظرة على الإنجازات العلمية والثقافية في العصر الذهبي للإسلام",
  body: ".شهدت الحضارة الإسلامية في العصور الوسطى ازدهاراً كبيراً في مجالات العلوم والفلسفة والفنون. برز علماء مثل ابن سينا والخوارزمي وابن رشد، الذين ساهموا في تطور المعرفة الإنسانية وأسسوا للنهضة الأوروبية",
  author: "أ.د. سعاد الصباح",
  date: "2024-02-20",
};
</script>
<template>
  <div class="mt-10 flex w-full flex-col items-end justify-end px-4 text-end">
    <h1 class="mb-3 text-5xl font-bold">{{ article?.name }}</h1>
    <h1 class="text-neutral">{{ article?.date }}</h1>
    <h1 class="text-neutral">{{ article?.author }}</h1>
    <hr class="divider flex border-0" />
    <p class="justify-items-center">{{ article?.body }}</p>
  </div>
</template>
