<template>
  <styled-hero-wrapper>
    <styled-h2>
      <styled-mark>{{ $t('hero.title') }}</styled-mark>
    </styled-h2>
    <styled-h3>
      <styled-mark>{{ $t('hero.subtitle') }}</styled-mark>
    </styled-h3>
  </styled-hero-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import background from "../assets/blue.png";
library.add(faEllipsisV);
library.add(faTimes);

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px
// background: #f2f2f2;

const StyledHeroWrapper = styled.section`
  background-image: url(${background});
  background-repeat: repeat;
  background-position: center;
  background-size: contain;
  padding: 2em 1em;
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-align: left;
  font-family: "Baloo 2", cursive;
  margin: 1em 0;
`;

const StyledH3 = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  text-align: left;
  font-family: "Baloo 2", cursive;
  margin: 1em 0;
`;

const StyledMark = styled.mark`
  background-color: #f26389;
  line-height: 2;
`;
export default {
  name: "Hero",
  components: {
    // "font-awesome-icon": FontAwesomeIcon,
    "styled-hero-wrapper": StyledHeroWrapper,
    "styled-h2": StyledH2,
    "styled-h3": StyledH3,
    "styled-mark": StyledMark
  }
};
</script>