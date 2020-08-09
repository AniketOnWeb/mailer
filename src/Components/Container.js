import React, { useState } from "react";
import styled from "styled-components";
import MainPopup from "./MainPopup";

const OptionsContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.base};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  right: 70px;
`;

const Container = () => {
  const [open, setopen] = useState(true);

  return (
    <div>
      <OptionsContainer onClick={() => setopen(!open)}></OptionsContainer>
      <MainPopup open={open} setopen={setopen} />
    </div>
  );
};

export default Container;
