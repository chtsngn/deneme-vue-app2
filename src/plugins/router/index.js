import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "anasayfa",
    component: () => import("../../views/Anasayfa.vue"),
  },
  {
    path: "/halisaha",
    redirect: { name: "anasayfa" },
  },
  {
    path: "/halisaha/:halisahaId",
    name: "halisaha",
    component: () => import("../../views/Halisaha.vue"),
  },
  {
    path: "/halisaha/rezervasyon/:halisahaId",
    name: "rezervasyon",
    component: () => import("../../views/Rezervasyon.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
