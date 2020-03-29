
<style lang="sass">
@import './assets/styles/style.sass'
</style>

<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <footer>
        <CookieBanner />
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
import CookieBanner from "./components/CookieBanner";
export default {
  components: {
    CookieBanner
  }
};
</script>
