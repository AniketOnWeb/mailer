import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useSpring, animated } from "react-spring";

const ParentContainer = styled.div`
  width: 35rem;
  height: 35rem;
  background-color: ${(props) => props.theme.colors.base};
  position: absolute;
  bottom: 11.5rem;
  right: 4.5rem;
  border-radius: 0.9rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem;
`;

const Options = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #393e46;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:active {
    transform: scale(0.96);
    box-shadow: inset 0 0 20px 4px #d65a311a;
  }
`;
const Typography = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: ${(props) => props.theme.colors.highEmphasis};
`;

const SubTypography = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: ${(props) => props.theme.colors.mediumEmphasis};
`;

const optionsList = [
  {
    name: "asd",
  },
  {
    name: "asd",
  },
  {
    name: "asd",
  },
];
const MainPopup = ({ open, setopen }) => {
  return (
    <CSSTransition
      in={open}
      timeout={100}
      classNames="date-picker"
      unmountOnExit
    >
      <ParentContainer>
        <div>
          <Typography>Send Feedback</Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "4rem",
          }}
        >
          {optionsList.map((item, i) => (
            <>
              <Options style={{ marginBottom: "1.2rem" }}>{item.name}</Options>
            </>
          ))}
        </div>

        <div style={{ marginTop: "3.4rem" }}>
          <SubTypography>Created by Aniket</SubTypography>
        </div>
      </ParentContainer>
    </CSSTransition>
  );
};

export default MainPopup;
