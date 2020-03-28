<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <fieldset>
      <div class="formElement">
        <label for="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          v-model="name.value"
          placeholder="June Osborne"
          :class="{ name , error: !name.valid }"
        />
      </div>
      <div class="formElement">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="june_osborne@hbo.com"
          required
          :class="{ email , error: !email.valid }"
          v-model="email.value"
        />
      </div>
      <div class="formElement">
        <label for="mensaje">Mensaje</label>
        <textarea
          name="mensaje"
          id="mensaje"
          rows="10"
          required
          placeholder="Hola, quiero presupuesto para mi página web..."
          v-model="message.text"
          :maxlength="message.maxlength"
        ></textarea>
      </div>
      <div class="formElement-v">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          v-model="terms"
          @click="acceptTerms"
          required
        />
        <label for="acceptTerms">
          He leido y Acepto la
          <router-link
            to="/politica-de-privacidad"
            title="Política de Privacidad"
          >Politica de Privacidad</router-link>
        </label>
      </div>
      <div class="formElement">
        <input
          v-if="!loading && !success"
          class="sendButton"
          :class="{loading: loading === true, error: error}"
          type="submit"
          :value="this.buttonText"
          :disabled="this.disabled"
        />
        <spinner line-bg-color="#F2F2F2" line-fg-color="#f26389" v-if="loading"></spinner>
      </div>
      <span class="error" v-if="error">{{this.errorMessage}}</span>
      <span class="success" v-if="success">👏🏻👏🏻👏🏻Nos ha llegado tu correo! 👏🏻👏🏻👏🏻</span>

      <div class="disclaimer">
        <p>
          Al rellenar el formulario estás dando el
          <span>consentimiento expreso</span> al tratamiento de tus datos (guardar tu mensaje y dirección de correo electrónico) conforme al
          <span>Reglamento General de Protección de Datos (GDPR)</span>
        </p>
        <p>
          La
          <span>responsable</span> de este sitio web es Teresa Romero Lozano, cuya
          <span>finalidad</span> es el contacto de clientes, con la
          <span>legitimación</span> de tu consentimiento otorgado en el formulario.
        </p>
        <p>
          El
          <span>destinatario</span> de tus datos (herramienta que uso) es Google Gmail y podrás ejercer tus
          <span>derechos de acceso, rectificación, limitación o supresión de tus datos</span>.(Ver
          <router-link
            to="/politica-de-privacidad"
            title="Política de Privacidad"
          >Politica de Privacidad</router-link>)
        </p>
      </div>
    </fieldset>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: {
        value: "",
        valid: true
      },
      terms: false,
      email: {
        value: "",
        valid: true
      },
      message: {
        text: "",
        maxlength: 255
      },
      loading: false,
      success: false,
      error: false,
      errorMessage: "",
      disabled: true,
      buttonText: "Enviar"
    };
  },
  methods: {
    acceptTerms() {
      this.terms = !this.terms;
      this.disabled = !this.terms;
    },
    async sendEmail() {
      try {
        this.disabled = true;
        this.loading = true;
        await this.$recaptchaLoaded();

        const token = await this.$recaptcha("contact");

        const url = `${process.env.VUE_APP_RECAPTCHA_API}?token=${token}`;

        // get recaptcha score
        const { data } = await axios.get(url);

        if (!data.success || data.score < 0.9)
          throw new Error("ReCaptcha No Válido");

        // send information
        const {
          email: { value: to },
          message: { text },
          name: { value: name },
          terms
        } = this;

        await axios.post(
          `${process.env.VUE_APP_CONTACT_API}`,
          { to, message: text, name, terms }
        );
        this.loading = false;
        this.success = true;
      } catch (err) {
        this.loading = false;
        this.disabled = false;
        this.error = true;
        this.errorMessage = err.message;
      }
    }
  }
};
</script>