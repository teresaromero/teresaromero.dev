<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Open+Sans&display=swap");
</style>

<template>
  <styled-footer>
    <styled-wrapper>
      <styled-element>
        <p>Copyright Teresa Romero</p>
      </styled-element>
      <styled-element>
        <a>Aviso Legal</a>
        <a>Politica de Privacidad</a>
      </styled-element>
    </styled-wrapper>
  </styled-footer>
</template>

<script>
import styled from "vue-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEllipsisV);
library.add(faTimes);

const StyledFooter = styled.footer`
  background: #011826;
  color: #f26389;
  font-family: "Open Sans", sans-serif;
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledFooterElement = styled.div``;

export default {
  name: "Footer",
  components: {
    //  "font-awesome-icon": FontAwesomeIcon,
    "styled-footer": StyledFooter,
    "styled-wrapper": StyledFooterWrapper,
    "styled-element": StyledFooterElement
  }
};
</script>