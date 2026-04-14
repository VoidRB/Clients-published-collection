<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <ul class="menu menu-horizontal flex gap-2 text-xl">
      <li>
        <RouterLink to="/books" class="p-0 px-2 duration-75 hover:scale-110">الكتب</RouterLink>
      </li>

      <li>
        <RouterLink to="/articles" class="p-0 px-2 duration-75 hover:scale-110"
          >المقالات</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/pictures" class="p-0 px-2 duration-75 hover:scale-110">الصور</RouterLink>
      </li>
    </ul>
  </div>
</template>
