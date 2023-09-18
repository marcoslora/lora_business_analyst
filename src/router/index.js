import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        auth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.path == "/login" && auth.currentUser) {
    next("/dashboard");
  } else if (
    to.matched.some((record) => record.meta.auth) &&
    !auth.currentUser
  ) {
    next("/login");
  } else {
    next();
  }
});
export default router;
