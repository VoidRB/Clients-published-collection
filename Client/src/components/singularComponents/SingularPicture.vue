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
    class="card border-base-200 my-4 cursor-pointer break-inside-avoid border p-2 shadow-sm hover:scale-101"
  >
    <img v-if="pictureUrl" draggable="false" :src="pictureUrl" class="w-full" />
    <p class="p-4">{{ props.pictureMetadata.name }}</p>
  </div>
</template>
