import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/rankings",
    name: "rankings",
    component: () => import("../views/Rankings.vue")
  },
  {
    path: "/scores",
    name: "scores",
    component: () => import("../views/Scores.vue")
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("../views/Rules.vue")
  },
  {
    path: "/records",
    name: "records",
    component: () => import("../views/Records.vue")
  },
  {
    path: "/archives",
    name: "archives",
    component: () => import("../views/Archives.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
