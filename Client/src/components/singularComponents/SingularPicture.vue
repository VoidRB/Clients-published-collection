<script setup lang="ts">
import { supabase } from "@/helper/supabase";
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import { onMounted, ref } from "vue";

const openModal = (id: string | number) => {
  const modal = document.getElementById(String(id)) as HTMLDialogElement;
  modal.showModal();
};

const finalPictureUrl = ref<string>();
const props = defineProps<{
  pictureMetadata: PictureMetadata;
}>();

onMounted(async () => {
  try {
    const { data } = supabase.storage
      .from("public-pictures-bucket")
      .getPublicUrl(props.pictureMetadata.filename);

    finalPictureUrl.value = data.publicUrl;
    console.log(data.publicUrl);
  } finally {
  }
});
</script>
<template>
  <div :key="props.pictureMetadata.id" class="break-inside-avoid">
    <img
      v-if="finalPictureUrl"
      draggable="false"
      @click="openModal(props.pictureMetadata.id)"
      :src="String(finalPictureUrl)"
      class="my-4 w-full cursor-pointer transition-all duration-100 select-none hover:scale-105 hover:drop-shadow-2xl"
    />

    <dialog :id="String(props.pictureMetadata.id)" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box p-3 lg:scale-150">
        <img
          v-if="finalPictureUrl"
          draggable="false"
          :src="String(finalPictureUrl)"
          class="max-h-96 w-full rounded-xl border-2"
        />
        <h1>{{ props.pictureMetadata.name }}</h1>
        <p class="text-neutral text-xs">{{ props.pictureMetadata.description }}</p>
        <p class="text-secondary mt-2 w-full text-end text-xs">اضغط على الخارج للإغلاق</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>
