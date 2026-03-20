<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="mb-14 flex w-full flex-col">
    <section
      class="flex min-h-screen w-full flex-col-reverse bg-gray-700 bg-[url(/homepageBG.jpg)] bg-cover bg-no-repeat bg-blend-multiply lg:flex-row"
    >
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-4 text-center lg:w-1/2"
      >
        <h1 class="text-3xl text-white">بوابتكم إلى موقع</h1>
        <p class="text-secondary-content mb-6 text-6xl">أ.د. عبد الله بن علي الحصين</p>
        <div class="mb-4 flex w-full items-center justify-center gap-4">
          <RouterLink to="/about" class="btn btn-accent">إعرف المزيد</RouterLink>
          <RouterLink to="/about" class="btn btn-secondary"> عن المشروع </RouterLink>
        </div>
      </div>
      <div class="hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:flex-col">
        <img
          draggable="false"
          src="/Portrait.png"
          alt="أ.د. عبد الله بن علي الحصين"
          class="bg-base-100 h-1/2 rounded-t-full"
        />
      </div>
    </section>

    <section
      class="bg-base-100 flex min-h-screen w-full flex-col items-center justify-start overflow-hidden"
    >
      <hr class="divider border-0 px-14" />
      <div class="flex flex-col gap-4 text-center lg:w-1/2">
        <h1 class="text-primary">رسالتي التاريخية</h1>
        <h1 class="text-secondary text-4xl leading-relaxed">أكثر من مجرد أرشيف، إنها أمانة جيل</h1>
        <p class="text-base-content">
          "في المؤرشف الرقمي، نؤمن أن التاريخ ليس مجرد أحداث مضت، بل هو الهوية التي نحملها في
          صدورنا. مهمتنا هي تنقيب كنوز المعرفة الوطنية، من كتب نادرة ومخطوطات عتيقة وصور فوتوغرافية،
          ووضعها بين يدي الباحثين والمهتمين في قالب رقمي حديث يحاكي رقي المتاحف العالمية."
        </p>
      </div>
      <hr class="divider border-0 px-14" />

      <section class="relative py-32">
        <div
          class="bg-base-200 absolute top-0 right-0 h-full w-1/3 origin-top translate-x-1/2 -skew-x-12 transform"
        ></div>
        <div class="relative z-10 container mx-auto px-12">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-primary mb-8 text-5xl font-bold italic">كن جزءاً من تاريخنا</h2>
            <p class="text-secondary mb-12 text-xl leading-relaxed">
              ندعو الباحثين والمؤرخين والمهتمين بالانضمام إلى مجتمعنا الرقمي. ساهم بمقالاتك، أو تبرع
              بمقتنياتك الرقمية، أو اشترك ليصلك كل جديد من خبايا الأرشيف الوطني.
            </p>
          </div>
        </div>
      </section>
      <!-- <section class="flex size-full flex-col items-center justify-center gap-4 px-14 lg:flex-row">
        <div class="bg-base-200 card h-full w-full lg:w-1/3"></div>
        <div class="bg-base-300 card h-full w-full lg:w-1/3"></div>
        <div class="bg-accent card h-full w-full lg:w-1/3"></div>
      </section> -->
    </section>
  </div>
</template>
