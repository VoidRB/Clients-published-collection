<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onMounted, watch } from "vue";
import { supabase } from "@/helper/supabase";
import type { FileObject } from "@supabase/storage-js";

const props = defineProps<{ initialSlide: number }>();

const currentSlide = ref(0);
const finalImagesArray = ref<(FileObject & { publicUrl: string })[] | null>([]);

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade" as const,
  mouseDrag: false,
  touchDrag: false,
};

const thumbnailsConfig = {
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
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
});

watch(() => props.initialSlide, (newVal) => {
  currentSlide.value = newVal;
});
</script>

<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="image in finalImagesArray" :key="image.id">
      <img :src="image.publicUrl" alt="Gallery Image" class="h-96 rounded-md object-contain" />
    </Slide>
  </Carousel>
  {{ currentSlide }}
  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image in finalImagesArray" :key="image.id">
      <template #default="{ currentIndex }">
        <div
          class="mt-4 size-full cursor-pointer opacity-50 transition-all hover:opacity-100 active:opacity-100"
          @click="slideTo(currentIndex)"
        >
          <img
            :src="image.publicUrl"
            alt="Thumbnail Image"
            class="size-full h-44 object-contain active:opacity-100"
          />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style></style>
