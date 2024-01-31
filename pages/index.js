import Navigation from "../components/navigation/Navigation.js";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Intro from "../components/Intro/Intro.js";
import React from "react";
import GlobalStyle from "./styles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <StyledNavigation />
      <ImageContainer>
        <StyledImage>
          <Image
            src="/massage.jpeg"
            alt="massage"
            layout="fill"
            objectFit="cover"
          />
          <ImageText className="fade-in-text">
            Sanfte Impulse <br />
            für innere Balance
          </ImageText>
        </StyledImage>
      </ImageContainer>

      <Intro />
    </>
  );
}
const StyledNavigation = styled(Navigation)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  margin-top: 120px;
  z-index: -1;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ImageText = styled.h1`
  font-size: 1.3rem;

  position: absolute;
  font-weight: 200;
  top: 10%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.5);

  &.fade-in-text {
    font-family: sans-serif;
    line-height: 1.5;
    text-align: center;
    font-size: 20px;
    animation: ${fadeIn} 5s;
  }
`;
