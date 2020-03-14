<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Bellota+Text:wght@300;400;700&display=swap");
</style>

<template>
  <nav>
    <styled-nav>
      <styled-title href="#">👩🏼‍💻Teresa Romero</styled-title>
      <styled-mobile-menu>
        <font-awesome-icon
          @click="toggle"
          :icon="open ? ['fas', 'times']: ['fas', 'ellipsis-v']"
          size="lg"
        />
      </styled-mobile-menu>
      <styled-menu :open="open">
        <styled-navLink href="/">{{ $t('navbar.home') }}</styled-navLink>

        <styled-navLink href="#">{{ $t('navbar.about') }}</styled-navLink>

        <styled-navLink href="#">{{ $t('navbar.contact') }}</styled-navLink>
      </styled-menu>
    </styled-nav>
  </nav>
</template>

<script>
import styled from "vue-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEllipsisV);
library.add(faTimes);

const StyledTitle = styled.a`
  font-size: 1.8em;
  text-align: left;
  color: palevioletred;
  font-family: "Baloo 2", cursive;
  min-width: fit-content;
`;

const StyledNavLink = styled.a`
  font-size: 1.3em;
  text-align: center;
  color: palevioletred;
  font-family: "Baloo 2", cursive;
  padding: 0.2em 0;
  @media (min-width: 768px) {
    font-size: 1.3em;
    padding: 0 1em;
  }
`;

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const StyledMenu = styled("div", { open: Boolean })`
  display: ${props => (props.open ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledMobileMenu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: palevioletred;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled("div", { open: Boolean })`
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: justify-between;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export default {
  name: "Navbar",
  components: {
    "styled-title": StyledTitle,
    "styled-navLink": StyledNavLink,
    "styled-menu": StyledMenu,
    "styled-nav": StyledNav,
    "styled-mobile-menu": StyledMobileMenu,
    "font-awesome-icon": FontAwesomeIcon
  },
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