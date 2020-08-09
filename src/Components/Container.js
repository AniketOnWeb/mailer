import React, { useState } from "react";
import styled from "styled-components";
import MainPopup from "./MainPopup";

const OptionsContainer = styled.div`
  width: 9rem;
  height: 9rem;
  background-color: ${(props) => props.theme.colors.base};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 3.5rem;
  right: 4.5rem;
`;

const Container = () => {
  const [open, setopen] = useState(true);

  console.log(open);
  return (
    <div>
      <OptionsContainer onClick={() => setopen(!open)}></OptionsContainer>
      <MainPopup open={open} setopen={setopen} />
    </div>
  );
};

export default Container;
