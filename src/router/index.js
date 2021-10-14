import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "卡片筛选",
    component: Home,
  },
  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/paratranz",
    name: "Paratranz",
    beforeEnter() {
      location.href = "https://paratranz.cn/projects/1209";
    },
  },
  {
    path: "/help",
    name: "效果帮助",
    component: () =>
    import( "../views/Help.vue"),
  },
  {
    path: "/nopic",
    name: "卡图征集",
    component: () =>
    import( "../views/nopic.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
