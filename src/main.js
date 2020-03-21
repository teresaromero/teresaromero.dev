import Vue from "vue/dist/vue.runtime.esm.js";
import VueRouter from "vue-router/dist/vue-router.esm.js";
import { Plugin } from "vue-fragment";

import VueI18Next from "@panter/vue-i18next/dist/vue-i18next.esm.js";
import i18next from "i18next/dist/esm/i18next.js";

import App from "./App";

import CookieLaw from "vue-cookie-law/dist/vue-cookie-law.js";
Vue.component("cookie-law", CookieLaw);

// Icons custom
import Icon from "./components/Icon";
Vue.component("icon-base", Icon);

import locales from "./i18n/locales";

Vue.config.productionTip = false;
Vue.use(VueI18Next);
Vue.use(VueRouter);
Vue.use(Plugin);

i18next.init({
  lng: navigator.language,
  fallbackLng: "en",
  resources: {
    en: { translation: locales.en },
    es: { translation: locales.es }
  }
});

const i18n = new VueI18Next(i18next);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: () => import("./components/Home") },
    {
      path: "/aviso-legal",
      component: () => import("./components/AvisoLegal")
    },
    {
      path: "/politica-de-privacidad",
      component: () => import("./components/PoliticaPrivacidad")
    },
    {
      path: "/politica-de-cookies",
      component: () => import("./components/PoliticaCookies")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
