import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
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
      path: "/pictures",
      name: "pictures",
      component: () => import("@/views/PicturesView.vue"),
      meta: {
        title: "الصور",
        requireAuth: false,
      },
    },
    {
      path: "/achievements",
      name: "Achievements",
      component: () => import("@/views/AchievementsView.vue"),
      meta: {
        title: "الإنجازات",
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
      path: "/private-collection",
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
        title: "خطأ : 404",
        requireAuth: false,
      },
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach(async (to, _from, next) => {
  document.title = `أرشيف الحصين | ${to.meta.title}`;
  if (to.meta.requireAuth === true) {
    if (sessionStorage.getItem("isAuthenticated")) {
      return next();
    }
    return next("/");
  }
  return next();
});

export default router;
