<script setup lang="ts">
import "vue3-carousel/carousel.css";
import type { PictureMetadata } from "@/interfaces/pictureInterface";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onMounted, watch } from "vue";
import { supabase } from "@/helper/supabase";
import type { FileObject } from "@supabase/storage-js";

const props = defineProps<{ initialSlide: number }>();

const currentSlide = ref(0);
const finalImagesArray = ref<(FileObject & { publicUrl: string })[] | null>([]);
const picturesMetadata = ref<PictureMetadata[]>([]);

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade" as const,
  mouseDrag: false,
  touchDrag: true,
};

const thumbnailsConfig = {
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: true,
  gap: 10,
};

onMounted(async () => {
  const { data, error } = await supabase.storage.from("public-pictures-bucket").list("");
  if (error) {
    console.error(error);
  } else {
    const filesWithUrls = data.map((file) => {
      const { data: urlData } = supabase.storage
        .from("public-pictures-bucket")
        .getPublicUrl(file.name);
      return { ...file, publicUrl: urlData.publicUrl };
    });
    filesWithUrls.sort((a, b) => {
      return Number(a.name) - Number(b.name);
    });
    finalImagesArray.value = filesWithUrls;
    currentSlide.value = props.initialSlide || 0;
  }

  try {
    const { data, error } = await supabase
      .from("public_pictures_metadata")
      .select("*")
      .order("id", { ascending: true });
    picturesMetadata.value = (data as PictureMetadata[]) || [];

    if (error) throw error;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
});

watch(
  () => props.initialSlide,
  (newVal) => {
    currentSlide.value = newVal;
  },
);
</script>

<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide class="flex flex-col" v-for="image in finalImagesArray" :key="image.id">
      <img
        :src="image.publicUrl"
        draggable="false"
        alt="Gallery Image"
        class="h-96 object-contain"
      />
      <p class="text-base-200 text-2xl">
        {{ picturesMetadata[Number(image.name) - 1]?.name }}
      </p>
      <p class="text-secondary-content w-full text-end text-xl">
        {{ picturesMetadata[Number(image.name) - 1]?.description }}
      </p>
    </Slide>
  </Carousel>
  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image in finalImagesArray" :key="image.id">
      <template #default="{ currentIndex }">
        <div
          draggable="false"
          class="mt-4 size-full cursor-pointer opacity-50 transition-all duration-75 hover:opacity-100 active:opacity-100"
          :class="{ 'opacity-100': currentIndex === currentSlide }"
          @click="slideTo(currentIndex)"
        >
          <img
            :src="image.publicUrl"
            draggable="false"
            alt="Thumbnail Image"
            class="size-full h-44 object-contain"
          />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
.carousel {
  --vc-nav-background: rgb(254 236 211);
  --vc-nav-border-radius: 100%;
}
</style>
