<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="stack hero h-full overflow-hidden lg:flex">
    <div class="hero-content flex-col lg:w-1/2 lg:flex-row-reverse">
      <div class="mx-2">
        <h1 class="text-primary text-center text-5xl font-bold lg:text-start">مرحباً!</h1>
        <p class="py-6 text-justify text-lg">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على
          الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
          لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
          محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
        </p>
        <div class="flex w-full">
          <RouterLink to="/about" class="btn btn-primary flex">إعرف المزيد</RouterLink>
        </div>
      </div>
    </div>
    <div
      class="h-full border-0 bg-[url(/homepagePicture.jpg)] bg-cover bg-no-repeat lg:w-1/2 lg:shadow-2xl"
    ></div>
  </div>
</template>
