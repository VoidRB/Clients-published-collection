<script setup lang="ts">
import FullArticleSkeleton from "@/components/skeletons/FullArticleSkeleton.vue";
import { supabase } from "@/helper/supabase";
import type Article from "@/interfaces/articleInterface";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const article = ref<Article>();
const route = useRoute();
const loading = ref<boolean>(true);
const apiSuccess = ref(true);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("Articles")
      .select("*")
      .eq(`slug`, route.params.slug)
      .single();

    if (error) throw error;
    article.value = data;
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
</script>
<template>
  <Transition v-if="loading"><FullArticleSkeleton /></Transition>

  <Transition name="fade">
    <div v-if="article && article.id > 0" class="my-10 mt-26 flex w-full flex-col px-4">
      <h1 class="mb-3 text-5xl font-bold">{{ article?.title }}</h1>
      <h1 class="text-neutral">{{ article?.date_written }}</h1>
      <h1 class="text-neutral">{{ article?.content.author }}</h1>
      <hr class="divider flex border-0" />
      <p class="self-center text-justify md:w-2/3">
        {{ article?.content.body }}
      </p>
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
