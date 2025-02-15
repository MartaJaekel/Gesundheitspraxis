import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Intro from "../components/Intro/Intro";
import media from "css-in-js-media";
import Main from "../components/Main/Main";
import Prices from "../components/Prices/Prices";
import Contact from "../components/Contact/Contact";
import { useState, useEffect } from "react";


export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    setShowPopUp(true);
  }, []);
  function closePopUp() {
    setShowPopUp(false);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>Holistic Touch Simona Jäkel</title>
        <meta
          name="description"
          content="Erleben Sie ganzheitliche Heilung mit Simona Jäkel. Spezialisiert auf Bowen-Therapie, Lomi Lomi Massage und Fußreflexzonenmassage, bietet Simona individuell abgestimmte Behandlungen zur Förderung von Entspannung, Balance und Wohlbefinden."
        />
        <meta property="og:title" content="Holistic Touch Simona Jäkel" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <ImageContainer>
        <StyledImage>
          <Image
            src="/bowensito.jpg"
            alt="massage"
            layout="fill"
            objectFit="cover"
            style={{
              objectPosition: "top",
            }}
          />

          <Overlay>
            <ImageText className="fade-in-text">
              Ganzheitliche Impulse für innere Balance
            </ImageText>
          </Overlay>
          <StyledButton
            onClick={() =>
              window.open(
                "https://buchung.treatwell.de/ort/gesundheitspraxis-simona-jaekel/",
                "_blank"
              )
            }
          >
            <span>Jetzt Buchen</span>
          </StyledButton>
        </StyledImage>
      </ImageContainer>
      {showPopUp && (
        <PopUp>
          <h1>Vorübergehende Adresse ab dem 04.02: Weichselplatz 3, 12045 Berlin. Bei Somatic Approach klingeln.</h1>
          <button onClick={closePopUp}>
            <Image src="/cross.svg" width={10} height={10} alt="close-button"></Image>
          </button>
        </PopUp>
      )}

      <Intro />
      <Main />
      <Prices />
      <Contact />
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  padding: 15px 20px;

  border-radius: 10px;
  border: none;
  color: #846a6a;

  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background-color: #f0d0b0e6;
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  ${media("<=phone")} {
    padding: 7px 20px;
  }
  span {
    font-size: 0.9rem;
    ${media("<=phone")} {
      font-size: 0.6rem;
    }
  }
`;
const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: auto;
  min-height: 60px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #958888;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 1rem;
    color: #958888;
    font-weight: 400;
    background-color: white;
    padding: 15px;
  }
  button {
    border: solid 0px #958888;
    border-radius: 30%;
    position: absolute;
    background-color: white;
    top: 0px;
    right: 0px;
    padding: 8px;
  }
`;


const ImageContainer = styled.div`
  width: 100%;
  height: calc(120vh - 100px);
  padding-top: 105px;
  z-index: -1;

  ${media("<=tablet")} {
    height: calc(65vh - 0px);
    padding-top: 140px;
  }
  ${media("<=desktop")} {
    height: calc(90vh - 200px);
  }
  ${media("<=phone")} {
    height: calc(90vh - 135px);
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

const ImageText = styled.h2`
  font-family: "Recoleta Alt Light";
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
      font-size: 0.9rem;
      animation: ${fadeIn} 5s;
    }
  }
  ${media("<=tablet")} {
    top: 50%;
    left: 50%;
    &.fade-in-text {
      line-height: 1.5;
      text-align: center;
      font-size: 0.9rem;
      animation: ${fadeIn} 5s;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px; 
  border-radius: 10px;
  white-space: nowrap; /* Prevent 
  transition: background-color 0.5s ease-in-out; 
  h1 {
   ${media("<=phone")} {
    font-size: 1rem;
    }
  }
  ${media("<=tablet")} {
    font-size: 1rem;
    }
  }
  ${media("<=phone")} {
    top: 80%;
    padding: 7px;
  }
`;
