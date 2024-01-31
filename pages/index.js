import Navigation from "../components/navigation/Navigation.js";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Intro from "../components/Intro/Intro.js";
import React from "react";

export default function Home() {
  return (
    <>
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
      <StyledIntro />
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
`;

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 0;
  z-index: 0;
`;

const StyledNavigation = styled(Navigation)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ImageText = styled.h1`
  font-size: 1.3rem;
  font-family: "fantasy";
  position: absolute;
  font-weight: 200;
  top: 10%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: white;

  &.fade-in-text {
    font-family: Arial;
    font-size: 20px;
    animation: ${fadeIn} 5s;
  }
`;

const StyledIntro = styled(Intro)`
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
`;
