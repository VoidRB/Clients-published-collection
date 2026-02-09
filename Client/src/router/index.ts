import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
        requireAuth: false,
      },
    },
    {
      path: "/books",
      name: "books",
      component: () => import("@/views/BooksView.vue"),
      meta: {
        title: "Books",
        requireAuth: false,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "About",
        requireAuth: false,
      },
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/views/ArticlesView.vue"),
      meta: {
        title: "Articles",
        requireAuth: false,
      },
    },
    {
      path: "/:catchall(.*)",
      name: "notFound",
      meta: {
        title: "404 Not Found",
        requireAuth: true,
      },
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | Walidi`;
  next();
});

export default router;
