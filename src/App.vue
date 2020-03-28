
<style lang="sass">
@import './assets/styles/style.sass'
</style>

<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <footer>
        <cookie-law
          buttonText="Aceptar 🍪"
          buttonDecline
          buttonDeclineText="Ignorar"
          theme="mytheme"
          v-on:accept="enablePlugin()"
        >
          <div slot="message">
            <p>Esta página web usa cookies 🍪 🥠</p>
            <p>Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios. <router-link to="/politica-de-privacidad">Más información</router-link></p>
          </div>
        </cookie-law>

        <div>
          <div class="copyright">
            <router-link to="/" title="Programadora Web">© 2020 - Teresa Romero</router-link>
          </div>
          <div class="legal">
            <router-link to="/aviso-legal" title="Aviso Legal">👩🏼‍💼 Aviso Legal</router-link>
            <router-link
              to="/politica-de-privacidad"
              title="Política de Privacidad"
            >🔏 Politica de Privacidad</router-link>
            <router-link
              to="/politica-de-cookies"
              title="Política de Cookies"
            >🍪 Politica de Cookies</router-link>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  methods: {
    enablePlugin() {
      bootstrap().then(() => {
        this.$gtag.event("cookie_consent_accept", {
          event_label: "Cookie Consent Banner",
          event_category: "cookie_consent"
        });
      });
    },
  }
};
</script>
