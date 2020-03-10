<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Features />
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

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Features,
    CallToAction,
    Footer,
  }
};
</script>

<style>
</style>
