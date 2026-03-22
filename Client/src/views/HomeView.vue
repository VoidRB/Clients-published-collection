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
        <h1 class="text-3xl text-white">بوابتكم إلى أرشيف</h1>
        <p class="text-secondary-content mb-6 text-6xl">أ.د. عبد الله بن علي الحصين</p>
        <div class="mb-4 flex w-full items-center justify-center gap-4">
          <RouterLink to="/about" class="btn btn-accent">إعرف المزيد</RouterLink>
          <RouterLink to="" class="btn btn-secondary"> عن المشروع </RouterLink>
        </div>
      </div>
      <div class="hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:flex-col">
        <img
          draggable="false"
          src="/Portrait.png"
          alt="أ.د. عبد الله بن علي الحصين"
          class="bg-base-100 h-1/2 rounded-t-full inset-shadow-sm inset-shadow-black"
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
        <p class="text-base-content px-4">
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
            <h2 class="text-primary mb-8 text-5xl font-bold italic">أرشيفك الشخصي</h2>
            <p class="text-secondary mb-12 text-xl leading-relaxed">
              "حيث تسكن الحكايا وتخلد البصمة. نحن لا نحفظ مجرد ملفات، بل نوثق مسيرة حياة، ونحمي نبض
              الذكريات من غبار النسيان. هنا، تجتمع إنجازاتك، صورك، وكتاباتك في صرحٍ آمنٍ يتجاوز حدود
              الزمن، ليبقى أثرك منارةً تضيء دروب الأجيال القادمة. ابنِ إرثك اليوم، ليتحدث عنك غداً."
            </p>
          </div>
        </div>
      </section>
      <!-- <section class="flex size-full flex-col items-center justify-center gap-4 px-14 lg:flex-row">
        <div class="bg-base-200 card h-full w-full lg:w-1/3"></div>
        <div class="bg-base-300 card h-full w-full lg:w-1/3"></div>
        <div class="bg-accent card h-full w-full lg:w-1/3"></div>
      </section> -->
      <!-- <div class="relative grid grid-cols-1 gap-12 px-14 md:grid-cols-12">
        <div
          class="to-bg-primary from-accent absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 transform bg-linear-to-t md:block"
        ></div>
        <div class="flex flex-col justify-center md:col-span-5 md:text-left">
          <div class="bg-base-200 relative rounded-lg p-8">
            <div class="label-text text-primary mb-2 text-xl font-bold">٢٠٢٣</div>
            <h3 class="font-headline mb-4 text-2xl font-bold">جائزة الابتكار الرقمي العالمي</h3>
            <p class="leading-relaxed">
              تلقى المشروع التقدير الدولي كأفضل منصة لحفظ الأرشيفات التاريخية باستخدام تقنيات الذكاء
              الاصطناعي في جنيف.
            </p>
          </div>
        </div>
        <div class="hidden items-center justify-center md:col-span-2 md:flex">
          <div class="bg-primary ring-accent z-10 h-4 w-4 rounded-full ring-8"></div>
        </div>
        <div class="flex items-center justify-center md:col-span-5 md:justify-start">
          <div
            class="h-64 w-64 overflow-hidden rounded-full grayscale transition-all duration-700 hover:grayscale-0"
          >
            <img
              alt="Global Innovation Award"
              class="h-full w-full object-cover"
              data-alt="Elegant crystal trophy with golden highlights"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1W7u8-hb6nHYJ7RQB68OKt26BdxN-GLlPUFljnjuzp8x3FINIj14xIECvLwsQEkvmmN8N1o1mo-rz614rw8RHCSLszU6dEgaLacQI6P04-MZ3xCJ7CH44QMy_9-5j7T1Um4cqk6VHZdR1r4QZlK_VfAqn_3DddsnR0skRQEM5nqKmptdMwM4ML8gzRYYbYc58c3-CrjpfdBzGnP3TThtEg-1VMqgiFFY9q38vZfu5Ve-dNit7D579zIWMJqcrxS2LgmJa3CcJJWw"
            />
          </div>
        </div>
        <div
          class="order-2 flex items-center justify-center md:order-1 md:col-span-5 md:justify-end"
        >
          <div
            class="h-64 w-64 overflow-hidden rounded-full grayscale transition-all duration-700 hover:grayscale-0"
          >
            <img
              alt="Digitization Milestone"
              class="h-full w-full object-cover"
              data-alt="Old documents being scanned with professional equipment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqh7OywlGgzgNHfmIv_y2RUYqejTMubacdK2mFIgxoMEAkSln1B0Qz6FCR15TzdXcqSpBoh6XVzoR1QwbXBTD972ExdWDBHRyXHUdH_nSBayNlYz8vD0MoVB7f2CIGSB3NfHL7zc5c-iq7xQhyg0EMntiJgJ2FBzrSW3v-MKpQ7IRewmq7W0CcHqOuqe8mLaeQpoch2UXTEEiolhmbbNmA8cGHup-AiPLIi1WX077V6b1zCVS_PN8xVCfhuIqCNf8GK40Y3YN0YCQ"
            />
          </div>
        </div>
        <div class="order-2 hidden items-center justify-center md:col-span-2 md:flex">
          <div class="bg-primary ring-accent z-10 h-4 w-4 rounded-full ring-8"></div>
        </div>
        <div class="order-1 flex flex-col justify-center md:order-3 md:col-span-5 md:text-right">
          <div class="bg-base-200 relative rounded-lg p-8 transition-colors">
            <div class="label-text text-primary mb-2 text-xl font-bold">٢٠١٨</div>
            <h3 class="font-headline mb-4 text-2xl font-bold">وسام الاستحقاق الثقافي</h3>
            <p class="text- leading-relaxed">
              منح الأرشيف الوطني وسام الاستحقاق لجهوده الاستثنائية في توثيق التراث الشفهي والشعبي.
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center md:col-span-5 md:text-left">
          <div
            class="bg-base-200 group hover:bg-surface-container-high relative rounded-lg p-8 transition-colors"
          >
            <div class="label-text text-primary mb-2 text-xl font-bold">٢٠٢١</div>
            <h3 class="font-headline mb-4 text-2xl font-bold">أرشفة مليون وثيقة تاريخية</h3>

            <p class="text-on-surface-variant leading-relaxed">
              تحقيق رقم قياسي وطني في سرعة وجودة رقمنة المخطوطات النادرة من العصور الوسطى.
            </p>
          </div>
        </div>
        <div class="hidden items-center justify-center md:col-span-2 md:flex">
          <div class="bg-primary ring-accent z-10 h-4 w-4 rounded-full ring-8"></div>
        </div>
        <div class="flex items-center justify-center md:col-span-5 md:justify-start">
          <div
            class="h-64 w-64 overflow-hidden rounded-full grayscale transition-all duration-700 hover:grayscale-0"
          >
            <img
              alt="Cultural Medal"
              class="h-full w-full object-cover"
              data-alt="A golden medal sitting on a velvet cushion"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7SoGf7JDQxxfZZSJaRnYQJlF8I6wUYByAhCzq_7z_2F0X12qhHj83Pa-fdw-Mu7HBgns5k8qShfN3EZnWF7pWmaBWd8eIbMuZU3O_YsdxZ6gRbEQZ2G3n0OIroeePSszM1bQ5WfvbJYChUA_i9i1hupyEea7pPjPZ0v7qUrzhdC8pS8vPH1EU3dJyOTTND8x_c9s13P2hoSHQn7EtU8d9jem-L71Lvd0VTXGqVTY9_8kg_mf2actxOpKfFr4qmgQeBiBnt2gvOcw"
            />
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>
