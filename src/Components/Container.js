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
  const [reference, setreference] = useState(false);

  const handleClick = () => {
    let getId = document.getElementById("sdk");

    setreference(!reference);
    let showPopup = document.getElementById("showPopup");
    showPopup.style.display = "block";
    showPopup.style.position = "absolute";
    showPopup.style.left = `${getId.getBoundingClientRect().left}px`;
    showPopup.style.top = `${getId.getBoundingClientRect().top}+${
      getId.getBoundingClientRect().height
    }px`;
  };

  return (
    <>
      <button
        style={{
          fontSize: "6rem",
          marginLeft: "120px",
          marginTop: "120px",
        }}
        id="sdk"
        onClick={() => handleClick()}
      >
        sad
      </button>
      <MainPopup open={true} setopen={setopen} />
      <div id="showPopup" style={{ fontSize: "6rem", display: "none" }}>
        asdjhasidajhsdhjasgdjhgashjdghasjd
      </div>
    </>
  );
};

export default Container;

// <OptionsContainer onClick={() => setopen(!open)}></OptionsContainer>
//   <MainPopup open={open} setopen={setopen} />
