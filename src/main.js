import Vue from "vue/dist/vue.runtime.esm.js";
import VueMeta from "vue-meta/dist/vue-meta.esm.js";
import { Plugin } from "vue-fragment";
import VueGtag from "vue-gtag";
import { VueReCaptcha } from "vue-recaptcha-v3";
import Spinner from "vue-simple-spinner/dist/vue-simple-spinner.min.js";
import router from "./router";
import App from "./App";

import CookieLaw from "vue-cookie-law/dist/vue-cookie-law.js";
Vue.component("cookie-law", CookieLaw);

// Icons custom
import Icon from "./components/Icon";
Vue.component("icon-base", Icon);

Vue.component("spinner", Spinner);

Vue.config.productionTip = false;
Vue.use(Plugin);
Vue.use(VueMeta);
Vue.use(VueReCaptcha, { siteKey: process.env.VUE_APP_SITEKEY });

Vue.use(
  VueGtag,
  {
    config: { id: "G-ZGYSTR06VH" },
    enabled: false,
    appName: "teresaromero",
    pageTrackerScreenviewEnabled: true
  },
  router
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
