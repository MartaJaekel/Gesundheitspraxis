import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation/Navigation.js";
import Intro from "../components/Intro/Intro.js";
import React from "react";
import Main from "../components/Main/Main.js";
import Infos from "../components/Infos/Infos.js";
import media from "css-in-js-media";
import Contact from "../components/Contact/Contact.js";
import Footer from "../components/Footer/Footer.js";

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
            style={{
              objectPosition: "top",
            }}
          />
          <ImageText className="fade-in-text">
            Sanfte Impulse <br />
            für innere Balance
          </ImageText>
        </StyledImage>
      </ImageContainer>

      <Intro />
      <Main />
      <StyledScroll>
        <Image
          src="/massageroom.jpeg"
          alt="massageroom"
          width={700}
          height={500}
        />
        <Image src="/living.jpeg" alt="living" width={700} height={500} />
      </StyledScroll>

      <Infos />
      <StyledLine>
        <StyledText id="contact">Kontakt</StyledText>
      </StyledLine>

      <Contact />
      <Footer />
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
  width: 100%;
  height: calc(100vh - 95px);

  padding-top: 95px;
  z-index: -1;
`;

const StyledImage = styled.div`
  max-width: 100%;
  object-fit: contain;
  height: 100%;
  position: relative;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ImageText = styled.h1`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: beige;

  &.fade-in-text {
    line-height: 1.5;
    text-align: center;
    font-size: 1.8rem;

    animation: ${fadeIn} 5s;
  }
  ${media("<=phone")} {
    position: absolute;

  top: 50%;
  left: 50%;
    &.fade-in-text {
      line-height: 1.5;
      text-align: center;
      font-size: 1.3rem;

      animation: ${fadeIn} 5s;
    }
  
`;
const StyledLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 80px 20px 80px;
  color: #000;
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
  }
  &:before {
    margin-right: 2em;
  }
  &:after {
    margin-left: 2em;
  }
`;
const StyledText = styled.h1`
  font-size: 1.7rem;
  color: #000;
  margin: 0 20px;
  #contact {
    scroll-margin-top: 10px;
  }
`;
const StyledScroll = styled.div`
  display: flex;
  ${media("<=phone")} {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
