import styled from "styled-components";
import Image from "next/image";
import React from "react";
import media from "css-in-js-media";

export default function Main() {
  return (
    <>
      <Waves>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            class="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            class="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </Waves>
      <StyledWrapper>
        <StyledSection>
          <StyledContainer>
            <StyledImage src="/move.jpg" layout="fill" objectFit="cover" />
          </StyledContainer>
          <StyledContent>
            <StyledTitle id="bowen-technik">
              DIE BOWEN-TECHNIK <br />
              Sanft - Effektiv - Ganzheitlich
            </StyledTitle>
            <StyledParagraph>
              Die Bowen Technik (Kurzform: Bowtech) ist eine ganzheitliche,
              sanfte Muskel und Bindegewebsmethode, die in den 50er Jahren in
              Australien entwickelt wurde. Eine Reihe von sanften Impulsen im
              Bereich des Muskel und Fasziensystems helfen dem Körper, seine
              Ressourcen der Selbstregulation optimal zu nutzen und wieder in
              Balance zu kommen. Die Bowen-Technik ist hervorragend geeignet, um
              Wohlbefinden und Gesundheit zu erlangen und zu erhalten.
            </StyledParagraph>
          </StyledContent>
        </StyledSection>

        <StyledCorridor />
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>

        <StyledSectionReverse>
          <StyledContent>
            <StyledTitle>ANWENDUNGSBEREICHE</StyledTitle>

            <StyledParagraph>
              Die Bowen-Technik wird angewendet bei:
            </StyledParagraph>
            <StyledUl>
              <li>Rückenschmerzen verschiedenen Ursprungs</li>
              <li>
                Verspannungen und Verhärtungen der Muskulatur im Rücken-Schulter
                und Nackenbereich
              </li>
              <li>ISG-Blockaden</li>
              <li>Kniebeschwerden</li>
              <li>
                Schwangerschaftsbegleitung wie z. B. Rückenschmerzen, Übelkeit
              </li>
              <li>Baby-Koliken, Schlafprobleme bei Babys</li>
              <li>Körperwahrnehmung</li>
              <li>Stärkung des Immunsystems</li>
              <li>bei innerer Anspannung</li>
            </StyledUl>
          </StyledContent>
          <StyledContainer>
            <StyledImage src="/technik.jpeg" layout="fill" objectFit="cover" />
          </StyledContainer>
        </StyledSectionReverse>
        <StyledCorridor />
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>
        <StyledSectionThree>
          <StyledContent>
            <StyledTitle>WIRKUNGSWEISE</StyledTitle>
            <StyledParagraph>
              Die gesetzten Impulse stimulieren bestimmte Nervenrezeptoren
              (Propriozeptoren u. Nozizeptoren) im Muskel und Fasziensystem.
              Dadurch wird der Energiefluss angeregt, die Muskeln entspannen
              sich und das Nervensystem wird ausbalanciert. Wie die
              Bowen-Technik funktioniert, kann man sich so in etwa vorstellen:
              Ein Regentropfen fällt ins Wasser. Dadurch entstehen Wellen, die
              sich immer weiter ausdehnen. Wenn sie ans Ufer gelangen, rollen
              sie wieder zurück und ein harmonischer Zustand wird erreicht. So
              etwa funktioniert es auch im Körper, der aus 60 bis 75% aus Wasser
              besteht, eine ideale Voraussetzung um die Bowen Impulse
              weiterzuleiten.
            </StyledParagraph>
          </StyledContent>
          <StyledContainer>
            <StyledImageWater
              src="/water.png"
              layout="fill"
              objectFit="cover"
            />
          </StyledContainer>
        </StyledSectionThree>
        <StyledQuote>
          "Die Kraft, die den Körper erschaffen hat, ist auch fähig den Körper
          zu heilen."
          <StyledName> J. Dispenza</StyledName>
        </StyledQuote>
      </StyledWrapper>
    </>
  );
}
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
    border-bottom: 1px solid #9e8d8d;
  }
  &:before {
    margin-right: 2em;
  }
  &:after {
    margin-left: 2em;
  }
`;
const Waves = styled.div`
  position: relative;
  rotate: 180deg;
  width: 100%;
  height: 40px;
  top: -20px;
  background-color: white;
  svg {
    width: 100%;
    height: 100%;
    fill: rgb(245, 245, 237);
  }
`;
const StyledWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 30px;

  ${media("<=phone")} {
    margin-top: 0px;
  }
  ${media("<=desktop")} {
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column-reverse;
  }
  ${media("<=tablet")} {
    margin: 0 30px;
  }
  ${media("<=phone")} {
    margin: 0px 20px;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 50%;

  height: 500px;

  ${media("<=desktop")} {
    width: calc(100% - 90px);
  }
  ${media("<=phone")} {
    width: 100%;
    height: 300px;
  }
  ${media("<=tablet")} {
    width: calc(100% - 20px);
  }
`;

const StyledSectionReverse = styled(StyledSection)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
  ${media("<=desktop")} {
    flex-direction: column;
  }
`;
const StyledSectionThree = styled(StyledSection)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
  }
  ${media("<=desktop")} {
    flex-direction: column;
    margin-top: 35px;
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;
const StyledImageWater = styled(Image)`
  position: absolute;
  width: 100%;
  inset: 0px;
  object-fit: cover;
  color: transparent;
`;

const StyledContent = styled.div`
  width: 45%;
  align-self: baseline;
  ${media("<=desktop")} {
    width: 100%;
    align-self: center;
    margin: 0px 20px;
  }
  ${media("<=phone")} {
    margin: 0px 20px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: lighter;
  color: #9e8d8d;
  hyphens: auto;
  margin: 0px;
  font-family: "Inter Tight", sans-serif;

  scroll-margin-top: 150px;
  ${media("<=phone")} {
    font-size: 1.5em;

    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 2.3rem;
  width: 100%;
  color: #9e8d8d;
  font-family: "Recoleta Alt Light";

  ${media("<=phone")} {
  }
`;

const StyledUl = styled.ul`
  font-size: 1.1rem;
  line-height: 2.3rem;
  color: #9e8d8d;
  font-family: "Recoleta Alt Light";
`;

const StyledCorridor = styled.div`
  height: 20px; // Adjust as needed
`;
const StyledQuote = styled.p`
display: flex;
flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    margin-bottom: 50px;
    padding: 30px;
    line-height: 2.3rem;
    font-size: 1.5rem;
    opacity: 2;
    font-family: "Recoleta Alt Light";
    color:#9e8d8d;
  transition: opacity 2s ease-in-out;
  background-color: #f4f1e9;
 
}`;
const StyledName = styled.span`
  font-size: 1.2rem;
`;
