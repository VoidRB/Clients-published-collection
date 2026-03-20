<script setup lang="ts">
import { supabase } from "@/helper/supabase";
import router from "@/router";
import { ref } from "vue";

const password = ref<string>();

const loginToCollection = async () => {
  const { data } = await supabase
    .from("site_secrets")
    .select("secret_name")
    .eq("secret_value", password.value)
    .single();

  if (!data) {
    sessionStorage.setItem("isAuthenticated", "false");
    alert("incorrect password");
  } else {
    sessionStorage.setItem("isAuthenticated", "true");

    router.replace("/private-collection");
  }
};
</script>
<template>
  <div class="toast lg:toast-middle toast-bottom toast-center z-50 h-1/2 w-full lg:w-1/2">
    <form
      @submit.prevent="loginToCollection()"
      class="fieldset bg-base-100 flex h-full flex-col items-center justify-center gap-4 drop-shadow-2xl"
    >
      <input
        v-model="password"
        type="password"
        class="input w-1/3 text-center caret-transparent transition-all duration-75 focus:scale-105 focus:shadow-xl"
        required
        placeholder="كلمة السر"
        autocomplete="current-password"
        minlength="8"
      />

      <button class="btn btn-primary">الدخول</button>
    </form>
  </div>
</template>
