import Vue from "vue/dist/vue.runtime.esm.js";
import App from "./App.vue";

import VueI18Next from "@panter/vue-i18next/dist/vue-i18next.esm.js";
import  i18next  from "i18next/dist/esm/i18next.js";

// Icons custom
import Icon from "./components/Icon";
Vue.component("icon-base", Icon);

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
  render: h => h(App)
});
