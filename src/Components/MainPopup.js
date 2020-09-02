import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useSpring, animated } from "react-spring";
import CustomSvg from "./CustomSvg";

const ParentContainer = styled.div`
  width: 460px;
  height: 450px;
  background-color: ${(props) => props.theme.colors.base};
  position: absolute;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  transition: 0.2s all ease-in-out;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  display: flex;
  align-items: center;

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
    name: "Idea",
    type: "idea",
  },
  {
    name: "Issue",
    type: "issue",
  },
  {
    name: "Other",
    type: "message",
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
                  <div style={{ display: "flex", marginLeft: "10px" }}>
                    <CustomSvg type={item.type} wudth="60px" height="60px" />
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      marginLeft: "20px",
                      color: "#999999",
                    }}
                  >
                    {item.name}
                  </div>
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
              ></h2>
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <SubTypography>Created by Aniket</SubTypography>
          </div>
        </Wrapper>
      </ParentContainer>
    </CSSTransition>
  );
};

export default MainPopup;
