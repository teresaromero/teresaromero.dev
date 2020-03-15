<template>
  <styled-container>
    <styled-h4>¿Qué tecnologias utilizo?</styled-h4>
    <styled-wrapper>
      <styled-element>
        <icon-base icon-name="mdiNodejs" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiReact" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiVuejs" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiWordpress" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiAws" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiGoogleCloud" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiGithub" iconColor="#f26389" />
      </styled-element>
      <styled-element>
        <icon-base icon-name="mdiSass" iconColor="#f26389" />
      </styled-element>
    </styled-wrapper>
  </styled-container>
</template>

<script>
import styled from "vue-styled-components";
import Icon from "./Icon";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px
const Container = styled.section`
  display: flex;
  background: #f2f2f2;
  flex-flow: column nowrap;
`;

const StyledH4 = styled.h4`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
`;

const StyledWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const StyledElement = styled.div`
  padding: 0.5em;
`;

export default {
  name: "Features",
  components: {
    "styled-wrapper": StyledWrapper,
    "styled-element": StyledElement,
    "icon-base": Icon,
    "styled-container": Container,
    "styled-h4": StyledH4
  }
};
</script>