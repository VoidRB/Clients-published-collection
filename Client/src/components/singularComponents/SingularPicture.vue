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

    finalPictureUrl.value = data.publicUrl.toString();
  } finally {
  }
});
</script>
<template>
  <div
    :key="props.pictureMetadata.id"
    @click="openModal(props.pictureMetadata.id)"
    class="card my-10 cursor-pointer break-inside-avoid bg-white transition-all duration-100 hover:scale-105 hover:drop-shadow-2xl"
  >
    <img
      v-if="finalPictureUrl"
      draggable="false"
      :src="finalPictureUrl"
      class="w-full p-2 select-none"
    />
    <h1 class="p-4">{{ props.pictureMetadata.name }}</h1>

    <dialog :id="props.pictureMetadata.id.toString()" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box p-3 lg:scale-150">
        <div class="flex size-full justify-center">
          <img v-if="finalPictureUrl" draggable="false" :src="finalPictureUrl" class="max-h-96" />
        </div>
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
