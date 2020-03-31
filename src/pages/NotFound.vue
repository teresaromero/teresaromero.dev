<style lang="sass">
.container404
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  min-height: 100vh
.div404
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  .text
    text-align: center
    font-weight: bolder
    font-size: 1em
    color: #011826
  a 
    text-decoration: none
    font-family: "Open Sans", sans-serif
</style>


<template>
  <fragment>
    <section class="container404">
      <div class="div404">
        <img src="https://teresaromeroassets.s3.eu-west-3.amazonaws.com/404.png" alt="Página No Encontrada" title="Página No Encontrada" />
        <p class="text">No hemos encontrado lo que estabas buscando... igual el contenido ya no existe o simplemente la ruta no esta correctamente escrita.</p>
         <router-link
              to="/"
              title="Inicio"
            >Volver a la página principal 🏃🏻‍♀️🏃🏼</router-link>
      </div>
    </section>
  </fragment>
</template>     