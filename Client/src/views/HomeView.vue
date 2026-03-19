<script setup lang="ts">
// import HeroCard from "@/components/HeroCard.vue";
</script>
<template>
  <div class="flex w-full flex-col">
    <div
      class="flex min-h-screen w-full flex-col-reverse bg-gray-700 bg-[url(/homepageBG.jpg)] bg-cover bg-no-repeat bg-blend-multiply lg:flex-row"
    >
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-4 text-center lg:w-1/2"
      >
        <h1 class="text-3xl text-white">بوابتكم إلى موقع</h1>
        <p class="text-secondary-content text-6xl">أ.د. عبد الله بن علي الحصين</p>
        <div class="flex w-full items-center justify-center gap-4">
          <RouterLink to="/about" class="btn btn-accent">إعرف المزيد</RouterLink>
          <RouterLink to="/about" class="btn btn-secondary"> عن المشروع </RouterLink>
        </div>
      </div>
      <div class="hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:flex-col">
        <img
          src="/Portrait.png"
          alt="أ.د. عبد الله بن علي الحصين"
          class="lg:mask bg-accent lg:h-1/2 lg:mask-circle"
        />
      </div>
    </div>

    <div class="bg-base-100 flex min-h-screen w-full flex-col items-center justify-start">
      <hr class="divider border-0 px-14" />
      <div class="flex flex-col gap-4 text-center lg:w-1/2">
        <h1 class="text-primary">رسالتنا التاريخية</h1>
        <h1 class="text-secondary text-4xl">أكثر من مجرد أرشيف، إنها أمانة جيل</h1>
        <p class="text-base-content">
          "في المؤرشف الرقمي، نؤمن أن التاريخ ليس مجرد أحداث مضت، بل هو الهوية التي نحملها في
          صدورنا. مهمتنا هي تنقيب كنوز المعرفة الوطنية، من كتب نادرة ومخطوطات عتيقة وصور فوتوغرافية،
          ووضعها بين يدي الباحثين والمهتمين في قالب رقمي حديث يحاكي رقي المتاحف العالمية."
        </p>
      </div>
      <hr class="divider border-0 px-14" />
    </div>

    <!-- <HeroCard /> -->
  </div>
</template>
