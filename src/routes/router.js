import Vue from "vue"
import VueRouter from "vue-router"

import motorcycles from '@/routes/motorcycles'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import(/* webpackChunkName: "index" */ "@/ui/Landing"),
    },
    motorcycles,
  ],
});

export { router };
