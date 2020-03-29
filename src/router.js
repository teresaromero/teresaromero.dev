import Vue from "vue/dist/vue.runtime.esm.js";
import VueRouter from "vue-router/dist/vue-router.esm.js";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home")
    },
    {
      path: "/aviso-legal",
      component: () => import("./pages/AvisoLegal")
    },
    {
      path: "/politica-de-privacidad",
      component: () => import("./pages/PoliticaPrivacidad")
    },
    {
      path: "/politica-de-cookies",
      component: () => import("./pages/PoliticaCookies")
    },
    { path: "*", component: () => import("./pages/NotFound") }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});




export default router;