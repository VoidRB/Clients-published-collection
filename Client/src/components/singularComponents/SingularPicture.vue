<script setup lang="ts">
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import { supabase } from "@/helper/supabase";
import { onMounted, ref } from "vue";

const pictureUrl = ref<string>();

const props = defineProps<{
  pictureMetadata: PictureMetadata;
}>();

onMounted(async () => {
  try {
    const { data } = supabase.storage
      .from("public-pictures-bucket")
      .getPublicUrl(props.pictureMetadata.filename);

    pictureUrl.value = data.publicUrl.toString();
  } finally {
  }
});
</script>
<template>
  <div
    :key="props.pictureMetadata.id"
    class="my-4 cursor-pointer break-inside-avoid bg-white p-2 shadow-sm transition-all hover:scale-105"
  >
    <img
      v-if="pictureUrl"
      draggable="false"
      :src="pictureUrl"
      class="w-full"
      :alt="props.pictureMetadata.name"
    />
    <p class="p-4">{{ props.pictureMetadata.name }}</p>
  </div>
</template>
