
<style lang="sass">
@import './assets/styles/style.sass'
</style>

<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
      <footer>
        <cookie-law buttonText="Aceptar 🍪" buttonDecline buttonDeclineText="Ignorar" theme="mytheme">
          <div slot="message">
            <p>
              Esta web utiliza cookies 🍪 🥠, puedes ver aqui la
              <router-link to="/politica-de-cookies">🔗 politica de cookies</router-link>y la
              <router-link to="/politica-de-privacidad">🔗 politica de privacidad</router-link>
            </p>
          </div>
        </cookie-law>

        <div>
          <div class="copyright">
            <router-link to="/">© 2020 - Teresa Romero</router-link>
          </div>
          <div class="legal">
            <router-link to="/aviso-legal">👩🏼‍💼 Aviso Legal</router-link>
            <router-link to="/politica-de-privacidad"> 🔏 Politica de Privacidad</router-link>
            <router-link to="/politica-de-cookies">🍪 Politica de Cookies</router-link>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
