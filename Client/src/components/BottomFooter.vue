<script setup lang="ts"></script>
<template>
  <footer
    class="footer sm:footer-horizontal footer-center bg-base-200 text-base-content mt-auto p-4"
  >
    <aside class="flex">
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      <div class="divider divider-horizontal divide-black"></div>
      <RouterLink to="/about" class="text-center">عن الموقع إلكتروني</RouterLink>
    </aside>
  </footer>
</template>
