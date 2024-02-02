import Navigation from "../components/Navigation/Navigation.js";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Intro from "../components/Intro/Intro.js";
import React from "react";
import Main from "../components/Main/Main.js";
import Infos from "../components/Infos/Infos.js";
import media from "css-in-js-media";

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

      <Intro />
      <Main />
      <Infos />
    </>
  );
}

const StyledNavigation = styled(Navigation)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  ${media("<=phone")} {
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  // margin-top: 120px;
  z-index: -1;
  ${media("<=phone")} {
  }
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
  position: absolute;

  top: 44%;
  left: 44%;
  transform: translate(-50%, -50%);
  color: #eaeaea;

  &.fade-in-text {
    line-height: 1.5;
    text-align: center;
    font-size: 1.8rem;

    animation: ${fadeIn} 5s;
  }
`;
