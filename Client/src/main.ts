import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(toast);

app.mount("#app");
