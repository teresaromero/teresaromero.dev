<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Open+Sans&display=swap");
</style>

<template>
  <div id="app">
    <Navbar />
    <Hero />
    <AboutMe />
    <features />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import CallToAction from "./components/CallToAction.vue";
import Footer from "./components/Footer.vue";
import AboutMe from "./components/AboutMe";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Features,
    CallToAction,
    Footer,
    AboutMe
  }
};
</script>

<style>
</style>
