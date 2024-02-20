import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Navigation from "../components/Navigation/Navigation.js";
import Intro from "../components/Intro/Intro.js";
import media from "css-in-js-media";
import Main from "../components/Main/Main.js";
import Infos from "../components/Infos/Infos.js";

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
          <Overlay>
            <ImageText className="fade-in-text">
              Sanfte Impulse für innere Balance
            </ImageText>
          </Overlay>
        </StyledImage>
      </ImageContainer>

      <Intro />
      <Main />

      <StyledContainer>
        <ImageWrapper>
          <StyledImage2
            src="/massageroom.jpeg"
            alt="massage"
            width={700}
            height={500}
          />
          <StyledImage2
            src="/living.jpeg"
            alt="massage"
            width={700}
            height={500}
          />
        </ImageWrapper>
      </StyledContainer>
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
  height: calc(105vh - 100px);

  padding-top: 120px;
  z-index: -1;
  ${media("<=phone")} {
    height: calc(100vh - 200px);
    padding-top: 100px;
  }
  ${media("<=tablet")} {
    height: calc(81vh - 200px);
  }
  ${media("<=desktop")} {
    height: calc(100vh - 200px);
  }
`;

const StyledImage = styled.div`
  max-width: 100%;
  object-fit: contain;
  height: 100%;
  position: relative;
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ImageText = styled.h1`
 
font-family:"Recoleta Alt Light";

  color: beige;

  &.fade-in-text {
    line-height: 1.5;
    text-align: center;
    font-size: 1.4rem;

    animation: ${fadeIn} 5s;
  }
  ${media("<=phone")} {
    

  top: 50%;
  left: 50%;
    &.fade-in-text {
      line-height: 1.5;
      text-align: center;
      font-size: 1.1rem;

      animation: ${fadeIn} 5s;
    }
  
`;
const StyledLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 100px;
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
  ${media("<=tablet")} {
    margin: 30px 70px;
  }
`;
const StyledText = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
  #contact {
    scroll-margin-top: 10px;
  }
  ${media("<=phone")} {
    margin: 0px;
  }
`;
const StyledContainer = styled.div`
  background-color: #724141;
  padding: 20px;
  background: linear-gradient(to right, #d8c5a1, #9b9a99);
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;

  margin: 50px 30px;
  display: flex;

  ${media("<=tablet")} {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  ${media("<=desktop")} {
    flex-direction: column;
    align-items: center;
  }
  ${media("<=phone")} {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledImage2 = styled(Image)`
  width: 500px; // adjust as needed
  height: 350px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  ${media("<=desktop")} {
    width: 400px;
    height: 300px;
  }
  ${media("<=tablet")} {
    width: 300px;
    height: 200px;
  }
  ${media("<=phone")} {
    width: 300px;
    height: 200px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.3);

  padding: 20px; /* Adjust the padding as needed */
  border-radius: 10px; /* Add rounded corners */
  white-space: nowrap; /* Prevent 
  transition: background-color 0.5s ease-in-out; /* Smooth transition for background-color */
  ${media("<=phone")} {
    top: 80%;

    padding: 7px;
  }
`;
