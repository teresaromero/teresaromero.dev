import Vue from "vue/dist/vue.runtime.esm.js";
import VueMeta from "vue-meta/dist/vue-meta.esm.js";
import { Plugin } from "vue-fragment/dist/vue-fragment.esm.js";
import { VueReCaptcha } from "vue-recaptcha-v3/dist/ReCaptchaVuePlugin.js";
import Spinner from "vue-simple-spinner/dist/vue-simple-spinner.min.js";
import firebase from "@firebase/app/dist/index.cjs.js";
import 'firebase/analytics/dist/index.esm.js'

import router from "./router";
import App from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyBmsRe5vl8YHsshLkjvPr73_wInYAt_ZpY",
  authDomain: "teresaromero-dev.firebaseapp.com",
  databaseURL: "https://teresaromero-dev.firebaseio.com",
  projectId: "teresaromero-dev",
  storageBucket: "teresaromero-dev.appspot.com",
  messagingSenderId: "746845711031",
  appId: "1:746845711031:web:faf67b6626c75a620c3b32",
  measurementId: "G-9FC6YH9PQ8"
});
firebase.analytics();

Vue.prototype.$analytics = firebase.analytics();

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

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
