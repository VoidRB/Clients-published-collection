<script setup lang="ts">
import SingularPicture from "@/components/singularComponents/SingularPicture.vue";
import SingularPictureSkeleton from "@/components/skeletons/SingularPictureSkeleton.vue";
import PicturesCarousel from "@/components/PicturesCarousel.vue";

import { supabase } from "@/helper/supabase";
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";

const loading = ref<boolean>(true);
const apiSuccess = ref(true);
const toast = useToast();

const picturesMetadata = ref<PictureMetadata[]>([]);
const carouselSlideNumberProp = ref<number>(0);

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from("public_pictures_metadata")
      .select("*")
      .order("id", { ascending: true });
    picturesMetadata.value = (data as PictureMetadata[]) || [];

    if (error) throw error;
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

const setCarouselSlideNumber = (id: number) => {
  carouselSlideNumberProp.value = id;
};
</script>

<template>
  <div class="m-16 flex w-full flex-col gap-4">
    <section
      class="flex min-h-96 w-full flex-col items-center justify-center gap-10 bg-gray-700 bg-[url(/homepageBG.jpg)] bg-cover bg-fixed bg-no-repeat object-fill text-center bg-blend-multiply select-none"
    >
      <h1 class="text-primary-content text-7xl font-bold">مجموعة الصور</h1>
      <p class="text-secondary-content">مجموعة من الصور التاريخية</p>
    </section>

    <section class="columns-1 gap-4 space-y-4 p-4 px-10 sm:columns-2 lg:columns-3">
      <TransitionGroup v-if="loading" name="list">
        <SingularPictureSkeleton v-for="n in 9" :key="n" :skeleton-number="n" />
      </TransitionGroup>
      <TransitionGroup name="list" tag="SingularPicture">
        <SingularPicture
          @click="setCarouselSlideNumber(index)"
          onclick="my_modal_3.showModal()"
          v-for="(picture, index) in picturesMetadata"
          :key="picture.id"
          :picture-metadata="picture"
        />
      </TransitionGroup>
    </section>
    <dialog id="my_modal_3" class="modal">
      <div
        class="modal-box flex min-h-screen min-w-screen flex-col items-center justify-center bg-transparent backdrop-blur-md"
      >
        <form method="dialog">
          <button class="btn btn-circle btn-ghost absolute top-2 right-2 text-2xl">
            <i class="pi pi-times"></i>
          </button>
        </form>
        <PicturesCarousel :initial-slide="carouselSlideNumberProp" />
      </div>
    </dialog>
  </div>
</template>
<style></style>
