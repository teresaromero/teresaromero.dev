<template>
  <s-nav>
    <s-title href="#">Teresa Romero</s-title>
    <s-mobile-menu>
      <font-awesome-icon
        @click="toggle"
        :icon="open ? ['fas', 'times']: ['fas', 'ellipsis-v']"
        size="lg"
      />
    </s-mobile-menu>
    <s-mobile-nav :open="open">
      <s-nav-link href="/">{{ $t('navbar.home') }}</s-nav-link>

      <s-nav-link href="#">{{ $t('navbar.about') }}</s-nav-link>

      <s-nav-link href="#">{{ $t('navbar.contact') }}</s-nav-link>
    </s-mobile-nav>
  </s-nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>