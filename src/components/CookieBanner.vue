<template>
  <cookie-law buttonText="Aceptar 🍪" buttonDecline buttonDeclineText="Ignorar" theme="mytheme">
    <div slot="message">
      <p>Esta página web usa cookies 🍪 🥠</p>
      <p>
        Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.
        <router-link to="/politica-de-privacidad" title="Política de Privacidad">Más información</router-link>
      </p>
    </div>
  </cookie-law>
</template>

