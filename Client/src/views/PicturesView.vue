<script setup lang="ts">
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import SingularPicture from "@/components/singularComponents/SingularPicture.vue";
import SingularPictureSkeleton from "@/components/skeletons/SingularPictureSkeleton.vue";
import { supabase } from "@/helper/supabase";

import { onMounted, ref } from "vue";

const picturesMetadata = ref<PictureMetadata[]>([]);
const loading = ref<boolean>(true);
const apiSuccess = ref(true);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("public_pictures_metadata")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    picturesMetadata.value = (data as PictureMetadata[]) || [];
    console.log(picturesMetadata.value);
  } catch (err) {
    console.log(err.message);
    apiSuccess.value = false;
  } finally {
    if (apiSuccess.value) {
      loading.value = false;
    } else {
      loading.value = true;
    }
  }
  console.log(loading.value);
});
</script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div
      class="flex h-96 w-full flex-col items-center justify-center gap-10 bg-gray-500 bg-[url(/placeholder.png)] bg-cover bg-fixed bg-no-repeat text-center bg-blend-multiply select-none"
    >
      <h1 class="text-primary-content text-7xl font-bold">مجموعة الصور</h1>
      <p class="text-secondary-content">مجموعة من الصور التاريخية</p>
    </div>
    <div class="columns-1 gap-4 space-y-4 p-4 px-10 sm:columns-2 lg:columns-3">
      <TransitionGroup v-if="loading" name="list">
        <SingularPictureSkeleton v-for="n in 9" :key="n" :skeleton-number="n" />
      </TransitionGroup>
      <TransitionGroup name="list" tag="SingularBook">
        <SingularPicture
          v-for="picture in picturesMetadata"
          :key="picture.id"
          :picture-metadata="picture"
        />
      </TransitionGroup>
    </div>
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
