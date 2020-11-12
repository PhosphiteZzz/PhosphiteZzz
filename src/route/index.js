import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/index",
    component: () => import("@/components/index.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/components/index.vue")
  },
  {
    path: "/d3",
    name: "d3",
    component: () => import("@/components/d3.vue")
  }
];
const router = new VueRouter({
  routes,
  mode: "hash"
});

export default router;
