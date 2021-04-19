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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
