import Vue from "vue/dist/vue.runtime.esm.js";
import VueRouter from "vue-router/dist/vue-router.esm.js";
import VueMeta from "vue-meta/dist/vue-meta.esm.js";
import { Plugin } from "vue-fragment";
import VueGtag from "vue-gtag";
import { VueReCaptcha } from 'vue-recaptcha-v3'

import App from "./App";

import CookieLaw from "vue-cookie-law/dist/vue-cookie-law.js";
Vue.component("cookie-law", CookieLaw);

// Icons custom
import Icon from "./components/Icon";
Vue.component("icon-base", Icon);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Plugin);
Vue.use(VueMeta);
Vue.use(VueReCaptcha, { siteKey: process.env.VUE_APP_SITEKEY })


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/Home"),
      meta: {
        title: "Programadora web freelance. Desarrollo de páginas web y apps",
        metaTags: [
          {
            name: "description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          },
          {
            property: "og:description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          }
        ]
      }
    },
    {
      path: "/aviso-legal",
      component: () => import("./components/AvisoLegal"),
      meta: {
        title:
          "Programadora web freelance. Desarrollo de páginas web, tiendas online y apps",
        metaTags: [
          {
            name: "description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          },
          {
            property: "og:description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          }
        ]
      }
    },
    {
      path: "/politica-de-privacidad",
      component: () => import("./components/PoliticaPrivacidad"),
      meta: {
        title:
          "Programadora freelance en Madrid y Zaragoza. Desarrollo de páginas web y apps",
        metaTags: [
          {
            name: "description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          },
          {
            property: "og:description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          }
        ]
      }
    },
    {
      path: "/politica-de-cookies",
      component: () => import("./components/PoliticaCookies"),
      meta: {
        title:
          "Programadora freelance en Madrid y Zaragoza. Desarrollo de páginas web y apps",
        metaTags: [
          {
            name: "description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          },
          {
            property: "og:description",
            content:
              "Diseñador web, programador web freelance Madrid y para toda España. Soy experto en creación de páginas web y tiendas online. Posicionamiento web SEO y más"
          }
        ]
      }
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched
  //   .slice()
  //   .reverse()
  //   .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

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
  render: h => h(App),

}).$mount("#app");
