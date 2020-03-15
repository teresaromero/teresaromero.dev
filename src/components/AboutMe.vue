<template>
  <styled-wrapper id="about">
    <s-blockquote-left>¿Necesitas una página web para tu negocio?</s-blockquote-left>
    <s-blockquote-left>¿Tienes en mente un negocio digital y no sabes como empezar?</s-blockquote-left>
    <styled-wrapper2>
      <styled-element>
        <avatar>
          <img src="../assets/fotoTeresaColor.png" />
        </avatar>
      </styled-element>
      <styled-element>
        <styled-p>Soy Teresa Romero, desarrolladora web y puedo ayudarte desde el planteamiento del diseño del producto digitial hasta su puesta en produción.</styled-p>
        <styled-p>Desarrollo todo tipo de proyectos digitales para particulares y pequeños negocios.</styled-p>
      </styled-element>
    </styled-wrapper2>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px
const StyledWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  background: #f2f2f2;
  padding: 1em;

  @media (min-width: 769px) {
    padding: 2em 4em;
  }

`;

const StyledWrapper2 = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 769px) {
    flex-flow: row nowrap;
    padding: 2em 4em;
    margin: 1em;
    background-color:#f26389;
  }

`;

const StyledElement = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1em;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 1em;
`;

const BlockquoteLeft = styled.blockquote`
  padding: 0 1em;
  margin: 1em;
  border-left: 8px solid #f26389;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;
const Avatar = styled.div`
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  max-width: 200px;
`;

export default {
  name: "AboutMe",
  components: {
    "styled-wrapper": StyledWrapper,
    "styled-element": StyledElement,
    "styled-p": StyledP,
    "s-blockquote-left": BlockquoteLeft,
    avatar: Avatar,
    "styled-wrapper2": StyledWrapper2
  }
};
</script>