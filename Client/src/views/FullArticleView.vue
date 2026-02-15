<script setup lang="ts">
import type Article from "@/interfaces/articleInterface";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

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
</script>
<template>
  <div>test article page</div>
</template>
