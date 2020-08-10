import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useSpring, animated } from "react-spring";

const ParentContainer = styled.div`
  width: 460px;
  height: 450px;
  background-color: ${(props) => props.theme.colors.base};
  position: absolute;
  bottom: 170px;
  right: 70px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Options = styled.div`
  width: 100%;
  height: 80px;
  background-color: #393e46;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:active {
    transform: scale(0.96);
    box-shadow: inset 0 0 20px 4px #d65a311a;
  }
`;
const Typography = styled.h2`
  font-size: 35px;
  font-weight: 500;
  line-height: normal;
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
  const [slide, setSlide] = useState(false);

  return (
    <CSSTransition
      in={open}
      timeout={100}
      classNames="date-picker"
      unmountOnExit
    >
      <ParentContainer>
        <Wrapper className={slide ? "slideLeft" : "normalState"}>
          <div>
            <Typography>Send Feedback</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "25px",
            }}
          >
            {optionsList.map((item, i) => (
              <>
                <Options
                  onClick={() => setSlide(true)}
                  style={{ marginBottom: "15px" }}
                >
                  {item.name}
                </Options>
              </>
            ))}
            <div
              className={
                slide ? "secondSlideElementShow" : "secondSlideElementHide"
              }
            >
              <h2
                style={{
                  fontSize: "30px",
                  color: "red",
                }}
              >
                asdasdasdasdasd
              </h2>
            </div>
          </div>

          <div style={{ marginTop: "2px" }}>
            <SubTypography>Created by Aniket</SubTypography>
          </div>
        </Wrapper>
      </ParentContainer>
    </CSSTransition>
  );
};

export default MainPopup;
