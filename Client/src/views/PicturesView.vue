<script setup lang="ts">
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import SingularPicture from "@/components/SingularPicture.vue";
import PublicPictureGallerySkeleton from "@/components/skeletons/PublicPictureGallerySkeleton.vue";
import { supabase } from "@/helper/supabase";

import { onMounted, ref } from "vue";

const picturesMetadata = ref<PictureMetadata[]>([]);
const loading = ref<boolean>(true);

onMounted(async () => {
  try {
    const { data } = await supabase
      .from("public_pictures_metadata")
      .select("*")
      .order("id", { ascending: true });

    picturesMetadata.value = (data as PictureMetadata[]) || [];
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div class="bg-base-300 h-96 w-full"></div>

    <div class="columns-1 gap-4 space-y-4 p-4 px-10 sm:columns-2 lg:columns-3">
      <TransitionGroup v-if="loading" name="list">
        <PublicPictureGallerySkeleton v-for="n in 9" :key="n" :skeleton-number="n" />
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
