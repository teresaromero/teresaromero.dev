import Vue from "vue/dist/vue.runtime.esm.js";
import VueRouter from "vue-router/dist/vue-router.esm.js";
Vue.use(VueRouter);

const meta = {
  aviso: {
    title: "Desarrollo web, tiendas online y aplicaciones - Aviso Legal",
    description:
      "La finalidad de este sitio web es la venta de servicios de desarrollo de páginas web y aplicaciones, optimizaciones de SEO y mantenimiento de las mismas.",
    siteTitle: "Teresa Romero - Desarrolladora",
    url: "https://teresaromero.dev"
  },
  privacidad: {
    title: "Desarrollo web, tiendas online y aplicaciones - Privacidad",
    description:
      "Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio",
    siteTitle: "Teresa Romero - Desarrolladora",
    url: "https://teresaromero.dev"
  },
  cookies: {
    title: "Desarrollo web, tiendas online y aplicaciones - Cookies",
    description:
      "Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio",
    siteTitle: "Teresa Romero - Desarrolladora",
    url: "https://teresaromero.dev"
  }
};

const getMeta = meta => {
  return {
    title: meta.title,
    metaTags: [
      { name: "description", content: meta.description },

      // OpenGraph data (Most widely used)
      { property: "og:title", content: meta.title },
      { property: "og:site_name", content: meta.siteTitle },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: meta.url
      },
      { property: "og:description", content: meta.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: meta.url
      },
      { name: "twitter:title", content: meta.title },
      {
        name: "twitter:description",
        content: meta.description
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@teresaromerodev" },

      // Google / Schema.org markup:
      { itemprop: "name", content: meta.title },
      { itemprop: "description", content: meta.description }
    ]
  };
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home"),
    },
    {
      path: "/aviso-legal",
      component: () => import("./pages/AvisoLegal"),
      meta: getMeta(meta.aviso)
    },
    {
      path: "/politica-de-privacidad",
      component: () => import("./pages/PoliticaPrivacidad"),
      meta: getMeta(meta.privacidad)
    },
    {
      path: "/politica-de-cookies",
      component: () => import("./pages/PoliticaCookies"),
      meta: getMeta(meta.cookies)
    },
    { path: "*", component: () => import("./pages/NotFound") }
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
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

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

export default router;
