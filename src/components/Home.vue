
<template>
  <fragment>
    <section class="blue">
      <div class="hero left">
        <h1>
          <mark>{{ $t('hero.title') }}</mark>
        </h1>

        <h2>
          <mark>{{ $t('hero.subtitle') }}</mark>
        </h2>
      </div>
    </section>
    <section>
      <div class="value">
        <blockquote>¿Necesitas una página web para tu negocio?</blockquote>
        <blockquote>¿Tienes en mente un negocio digital y no sabes como empezar?</blockquote>
      </div>

      <div class="about">
        <div class="image">
          <img class="avatar" src="../assets/teresa_romero.png" alt="teresa romero" />
        </div>
        <div class="description">
          <p>Soy Teresa Romero, desarrolladora web y puedo ayudarte desde el planteamiento del diseño del producto digitial hasta su puesta en produción.</p>
          <p>Desarrollo todo tipo de proyectos digitales para particulares y pequeños negocios.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="tech">
        <h2 class="center">¿Qué tecnologias utilizo?</h2>
        <div class="icons">
          <div class="icon">
            <icon-base icon-name="mdiNodejs" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiReact" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiVuejs" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiWordpress" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiAws" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGoogleCloud" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGithub" iconColor="#f26389" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiSass" iconColor="#f26389" />
          </div>
        </div>
      </div>

      <div class="portfolio">
        <h2 class="center">Ya he desarrollado estos sitios</h2>
        <div class="portfolio">
          <div class="portfolio">
            <h3 class="center">Asociacion Victoria</h3>
            <a
              class="img-anchor"
              href="http://asociacionvictoria.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../assets/asociacionvictoria.png" alt="asociacion victoria" />
            </a>
          </div>
          <div class="portfolio">
            <h3 class="center">Centro de estética Rufas</h3>

            <img
              src="../assets/rufas.png"
              alt="centro de estetica y peluquería rufas"
            />
          </div>
          <div class="portfolio">
            <h3 class="center">Dr. Romero Cardiel</h3>
            <img src="../assets/romerocardiel.png" alt="dr. romero" />
          </div>
        </div>
      </div>
    </section>

    <section class="pink">
      <div class="action">
        <button class="call">Quiero informarme</button>
      </div>
    </section>
  </fragment>
</template>