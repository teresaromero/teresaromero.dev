<template>
  <styled-section>
    <styled-button>Quiero informarme</styled-button>
  </styled-section>
</template>

<script>
import styled from "vue-styled-components";
import background from "../assets/pink.png";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: repeat;
  background-position: center;
  background-size: contain;
  background-color: #f26389;
  padding: 4em 1em;
`;

const StyledButton = styled.button`
  background-color: #f2f2f2;
  border-radius: 8px;
  color:#f26389;
  font-family: "Baloo 2", cursive;
  font-size: 1.3em;
  font-weight: bold;
  padding: 12px 24px;
  text-decoration: none;
`;

export default {
  components: {
    "styled-section": StyledSection,
    "styled-button": StyledButton
  }
};
</script>