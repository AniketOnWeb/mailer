import React from "react";
import styled from "styled-components";
import Container from "./Components/Container";

const Hero = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  return (
    <Hero>
      <Container />
    </Hero>
  );
};
