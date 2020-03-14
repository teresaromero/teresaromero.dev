<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap");
</style>

<template>
  <styled-hero-wrapper>
    <styled-h2>{{ $t('hero.title') }}</styled-h2>
    <styled-h3>{{ $t('hero.subtitle') }}</styled-h3>

  </styled-hero-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEllipsisV);
library.add(faTimes);

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const StyledHeroWrapper = styled.section`
background: #F2F2F2;
  padding: 4em 1em;
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-align: left;
  font-family: "Baloo 2", cursive;
`;
const StyledH3 = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  text-align: left;
  font-family: "Baloo 2", cursive;
`;

// const StyledButton = styled.button`
//   font-family: "Baloo 2", cursive;
//   font-weight: 100;
//   color: white;
//   background: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 10px;
// `;

export default {
  name: "Hero",
  components: {
    // "font-awesome-icon": FontAwesomeIcon,
    "styled-hero-wrapper": StyledHeroWrapper,
    "styled-h2": StyledH2,
    "styled-h3": StyledH3,
  }
};
</script>