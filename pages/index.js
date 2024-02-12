import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation/Navigation.js";
import Intro from "../components/Intro/Intro.js";
import media from "css-in-js-media";
import Main from "../components/Main/Main.js";
import Infos from "../components/Infos/Infos.js";

import Contact from "../components/Contact/Contact.js";
import Footer from "../components/Footer/Footer.js";
import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/massageroom.jpeg", "/living.jpeg"];
  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
      <ScrollContainer>
        <StyledScroll>
          <ImageWrapper>
            <Image
              src={images[currentImageIndex]}
              alt="slideshow"
              width={700}
              height={500}
            />
          </ImageWrapper>
        </StyledScroll>
        <CustomNav>
          <ArrowLeft onClick={scrollLeft}>{"<"}</ArrowLeft>
          <ArrowRight onClick={scrollRight}>{">"}</ArrowRight>
        </CustomNav>
      </ScrollContainer>
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
font-family:"Recoleta Alt Light";
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
  ${media("<=phone")} {
    margin-bottom: 10px;
  }
`;
const StyledText = styled.h1`
  font-size: 1.4rem;
  font-family: "Recoleta Alt Light";
  color: #000;
  margin: 0 20px;
  #contact {
    scroll-margin-top: 10px;
  }
`;
const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;

  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap; /* Ensure the images stay in a single row */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome and Safari */
  }
`;

const CustomNav = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  scroll-snap-align: start;
  transform: translateX(100%); // Start from off the right edge of the screen
  transition: transform 1s ease-out; // Transition the transform property over 1 second
  animation: slideIn 1s forwards;

  @keyframes slideIn {
    to {
      transform: translateX(0); // End at the normal position
    }
  }
`;
const Arrow = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ArrowLeft = styled(Arrow)`
  margin-right: 10px; /* Adjust spacing between arrows */
  color: #573838;
`;

const ArrowRight = styled(Arrow)`
  margin-left: 10px; /* Adjust spacing between arrows */
  color: #573838;
`;
