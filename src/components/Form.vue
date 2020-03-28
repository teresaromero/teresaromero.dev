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
        <input class="submitButton" type="submit" value="Enviar" :disabled="!this.terms" />
      </div>
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
          <span>destinatario</span> de tus datos (herramienta que uso) es Firebase de Google Inc. al amparo del acuerdo EU-US Privacy Shield. - Información disponible
          <a
            tarjet="_blank"
            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
          >aquí</a>. y podrás ejercer tus
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
      submitted: false,
      error: ""
    };
  },
  methods: {
    acceptTerms() {
      this.terms = !this.terms;
    },
    async sendEmail() {
      try {
        await this.$recaptchaLoaded();

        const token = await this.$recaptcha("contact");

        const url = `${process.env.VUE_APP_API_URL}/teresaromero-dev/europe-west1/sendRecaptcha?token=${token}`;

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

        const emailResponse = await axios.post(
          `${process.env.VUE_APP_API_URL}/teresaromero-dev/europe-west1/contact`,
          { to, message: text, name, terms }
        );
        console.log(emailResponse);
        return emailResponse;
      } catch (err) {
        console.log("Error:", err.message);
        this.error = err.message;
      }
    }
  }
};
</script>