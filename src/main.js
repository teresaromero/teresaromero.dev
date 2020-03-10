import Vue from "vue";

import VueI18Next from "@panter/vue-i18next";
import i18next from "i18next";

import App from "./App.vue";
import "@/assets/css/tailwind.css";
import locales from "./i18n/locales";

Vue.config.productionTip = false;
Vue.use(VueI18Next);

i18next.init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    en: { translation: locales.en },
    es: { translation: locales.es }
  }
});

const i18n = new VueI18Next(i18next);

new Vue({
  el: "#app",
  i18n,
  render: (h) => h(App),
});
