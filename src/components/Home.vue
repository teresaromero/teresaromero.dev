
<template>
  <fragment>
    <section class="blue">
      <div class="hero left">
        <h1>
          <mark>Desarrollo de páginas web y aplicaciones</mark>
        </h1>
      </div>
    </section>
    <section>
      <div class="value">
        <h2 class="blockquote">
          <i>Necesito una página web</i>
        </h2>
        <h2 class="blockquote">
          <i>Tengo en mente un negocio digital y no se cómo empezar</i>
        </h2>
        <h2 class="blockquote">
          <i>Mi web es un desastre y necesito ayuda</i>
        </h2>
        <h2 class="blockquote">
          <i>Tengo una web pero nadie la encuentra</i>
        </h2>
      </div>

      <div class="about">
        <div class="image">
          <img
            class="avatar"
            src="../assets/teresa_romero.png"
            alt="Foto de Teresa Romero"
            title="Teresa Romero"
          />
        </div>
        <div class="description">
          <p>Soy Teresa Romero, desarrolladora web. Puedo ayudarte desde el planteamiento del diseño del producto digital hasta su puesta en produción y posterior mantenimiento.</p>
          <h2
            class="text"
          >Desarrollo todo tipo de proyectos digitales para particulares y pequeños negocios.</h2>
        </div>
      </div>
    </section>

    <section>
      <div class="tech">
        <p class="title center">Tecnologías que utilizo</p>
        <div class="icons">
          <div class="icon">
            <icon-base icon-name="mdiNodejs" iconColor="#f26389" aria-label="Node" />
            <h2 class="h2icon">Node.Js</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiReact" iconColor="#f26389" aria-label="React" />
            <h2 class="h2icon">React</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiVuejs" iconColor="#f26389" aria-label="VueJs" />
            <h2 class="h2icon">Vue</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiWordpress" iconColor="#f26389" aria-label="Wordpress" />
            <h2 class="h2icon">Wordpress</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiAws" iconColor="#f26389" aria-label="Aws" />
            <h2 class="h2icon">AWS</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGoogleCloud" iconColor="#f26389" aria-label="GoogleCloud" />
            <h2 class="h2icon">GCloud</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGithub" iconColor="#f26389" aria-label="GitHub" />
            <h2 class="h2icon">Github</h2>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiSass" iconColor="#f26389" aria-label="Sass" />
            <h2 class="h2icon">Sass</h2>
          </div>
        </div>
      </div>

      <div class="portfolio">
        <p class="title center">Ya han confiando en mi...</p>
        <div class="portfolio">
          <div class="portfolio">
            <h2 class="title2 center">Asociación Victoria</h2>
            <a
              class="img-anchor"
              href="https://asociacionvictoria.es"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Asociación de mujeres en contra de la violencia de género Victoria"
            >
              <img
                src="../assets/asociacionvictoria.png"
                alt="Asociación Victoria"
                title="Asociación Victoria"
              />
            </a>
          </div>
          <div class="portfolio">
            <h2 class="title2 center">Salón de Peluquería y Estética Rufas</h2>
            <a
              class="img-anchor"
              href="https://rufas.es"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Centro Neotécnico de Estética y Peluquería Rufas"
            >
              <img
                src="../assets/rufas.png"
                alt="Centro Neotécnico de Estética y Peluquería Rufas"
                title="Centro Neotécnico de Estética y Peluquería Rufas"
              />
            </a>
          </div>
          <div class="portfolio">
            <h2 class="title2 center">Dr. Romero Cardiel</h2>
            <a
              class="img-anchor"
              href="https://romerocardiel.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Consulta del Dr. Romero Cardiel, Ginecólogo y Obstetra"
            >
              <img
                src="../assets/romerocardiel.png"
                alt="Consulta del Dr. Romero Cardiel, Ginecólogo y Obstetra"
                title="Consulta del Dr. Romero Cardiel, Ginecólogo y Obstetra"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="tech">
      <p class="center">
        Contacta conmigo a través de mis perfiles en
        <a
          class="social"
          href="https://www.linkedin.com/in/teresaromerolozano/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Perfil de Teresa Romero en Linkedin"
        >LinkedIn</a> y
        <a
          class="social"
          href="https://www.malt.es/profile/teresaromerolozano"
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="Perfil de Teresa Romero en Malt"
        >Malt</a>
      </p>

      <p class="title pink">Pide presupuesto sin compromiso</p>
    </div>

    <section class="pink">
      <FormC></FormC>
    </section>
  </fragment>
</template>

<script>
import FormC from "./Form";

export default {
  components: {
    FormC
  }
};
</script>