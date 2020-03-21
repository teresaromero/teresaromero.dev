
<template>
  <fragment>
    <section class="blue">
      <div class="hero left">
        <h1>
          <mark>{{ $t('home.title') }}</mark>
        </h1>

        <h2>
          <mark>{{ $t('home.subtitle') }}</mark>
        </h2>
      </div>
    </section>
    <section>
      <div class="value">
        <blockquote>{{ $t('home.value1') }}</blockquote>
        <blockquote>{{ $t('home.value2') }}</blockquote>
      </div>

      <div class="about">
        <div class="image">
          <img class="avatar" src="../assets/teresa_romero.png" alt="teresa romero" />
        </div>
        <div class="description">
          <p>{{ $t('home.about1') }}</p>
          <p>{{ $t('home.about2') }}</p>
        </div>
      </div>
    </section>

    <section>
      <div class="tech">
        <h2 class="center">{{ $t('home.tech_title') }}</h2>
        <div class="icons">
          <div class="icon">
            <icon-base icon-name="mdiNodejs" iconColor="#f26389" ariaLabel="Node"/>
          </div>
          <div class="icon">
            <icon-base icon-name="mdiReact" iconColor="#f26389" ariaLabel="React" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiVuejs" iconColor="#f26389" ariaLabel="Vue" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiWordpress" iconColor="#f26389" ariaLabel="Wordpress" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiAws" iconColor="#f26389" ariaLabel="aws" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGoogleCloud" iconColor="#f26389" ariaLabel="Google Cloud" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiGithub" iconColor="#f26389" ariaLabel="Github" />
          </div>
          <div class="icon">
            <icon-base icon-name="mdiSass" iconColor="#f26389" ariaLabel="Sass" />
          </div>
        </div>
      </div>

      <div class="portfolio">
        <h2 class="center">{{ $t('home.portfolio_title') }}</h2>
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
            <h3 class="center">Salón de Peluquería y Estética Rufas</h3>

            <img src="../assets/rufas.png" alt="centro de estetica y peluquería rufas" />
          </div>
          <div class="portfolio">
            <h3 class="center">Dr. Romero Cardiel</h3>
            <img src="../assets/romerocardiel.png" alt="dr. romero" />
          </div>
        </div>
      </div>
    </section>

     <div class="tech">
        <h3 class="pink">{{ $t('home.value3') }}</h3>
        <span class="emoji">👇🏼</span>
      </div>

    <section class="pink">
      <div class="action">
        <button class="call">{{ $t('home.callToAction') }}</button>
      </div>
    </section>
  </fragment>
</template>