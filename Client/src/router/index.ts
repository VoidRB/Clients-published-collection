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
        title: "الصفحة الرئيسية",
        requireAuth: false,
      },
    },
    {
      path: "/books",
      name: "books",
      component: () => import("@/views/BooksView.vue"),
      meta: {
        title: "الكتب",
        requireAuth: false,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "عن الموقع إلكتروني",
        requireAuth: false,
      },
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/views/ArticlesView.vue"),
      meta: {
        title: "المقالات",
        requireAuth: false,
      },
    },
    {
      path: "/article/:slug",
      name: "article",
      component: () => import("@/views/FullArticleView.vue"),
      meta: {
        title: "المقالات",
        requireAuth: false,
      },
    },
    {
      path: "/Private-collection",
      name: "Private-collection",
      component: () => import("@/views/PrivateCollectionView.vue"),
      meta: {
        title: "المجموعة الخاصة",
        requireAuth: true,
      },
    },
    {
      path: "/:catchall(.*)",
      name: "notFound",
      meta: {
        title: "خطأ: 404",
        requireAuth: false,
      },
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, _from, next) => {
  document.title = `المرجع | ${to.meta.title}`;
  next();
});

router.beforeEach(async (to, _from, next) => {
  if (to.meta.requireAuth === true) {
    const authItem = sessionStorage.getItem("isAuthenticated");
    if (authItem === "true") {
      return next();
    }
    return next("/");
  }
  return next();
});

export default router;
