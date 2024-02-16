import styled from "styled-components";
import Image from "next/image";
import React from "react";
import media from "css-in-js-media";

export default function Main() {
  return (
    <>
      <StyledWrapper>
        <StyledText id="bowen-technik">
          DIE BOWEN-TECHNIK <br />
          Sanft - Effektiv - Ganzheitlich
        </StyledText>
        <StyledSection>
          <StyledContainer>
            <StyledImage src="/move.jpg" layout="fill" objectFit="cover" />
          </StyledContainer>
          <StyledContent>
            <StyledTitle>ÜBERBLICK</StyledTitle>
            <StyledParagraph>
              Die Bowen Technik (Kurzform: Bowtech) ist eine ganzheitliche,
              sanfte Muskel-und Bindegewebsmethode, die in den 50er Jahren in
              Australien entwickelt wurde. Eine Reihe von sanften Impulsen im
              Bereich des Muskel- und Fasziensystems helfen dem Körper, seine
              Ressourcen der Selbstregulation optimal zu nutzen und wieder in
              Balance zu kommen. Die Bowen-Technik ist hervorragend geeignet,
              Wohlbefinden und Gesundheit zu erlangen und zu erhalten.
            </StyledParagraph>
          </StyledContent>
        </StyledSection>

        <StyledCorridor />
        <StyledSectionReverse>
          <StyledContent>
            <StyledTitle>ANWENDUNGSBEREICHE</StyledTitle>

            <StyledParagraph>
              Die Bowen-Technik wird angewendet bei:
            </StyledParagraph>
            <StyledUl>
              <li>Rückenschmerzen verschiedenen Ursprungs</li>
              <li>
                Verspannungen und Verhärtungen bei Muskulatur im
                Rücken-Schulter- und Nackenbereich
              </li>
              <li>ISG-Blockaden</li>
              <li>Kniebeschwerden</li>
              <li>
                Schwangerschaftsbegleitung wie z. B. Rückenschmerzen, Übelkeit
              </li>
              <li>Baby-Koliken, Schlafprobleme bei Babys</li>
              <li>Körperwahrnehmung</li>
              <li>Stärkung des Immunsystems</li>
              <li>Entspannung</li>
            </StyledUl>
          </StyledContent>
          <StyledContainer>
            <StyledImage src="/technik.jpeg" layout="fill" objectFit="cover" />
          </StyledContainer>
        </StyledSectionReverse>
        <StyledSectionThree>
          <StyledContent>
            <StyledTitle>WIRKUNGSWEISE</StyledTitle>
            <StyledParagraph>
              Die gesetzten Impulse stimulieren bestimmte Nervenrezeptoren
              (Propriozeptoren u. Nozizeptoren) im Muskel und Fasziensystem.
              Dadurch wird der Energiefluss angeregt, die Muskeln entspannen
              sich und das Nervensystem wird ausbalanciert. Wie die
              Bowen-Technik funktioniert kann man sich in etwa so vorstellen:
              ein Regentropfen fällt ins Wasser. Dadurch entstehen Wellen, die
              sich immer weiter ausdehnen. Wenn sie ans Ufer gelangen, rollen
              sie wieder zurück und ein harmonischer Zustand wird erreicht. So
              etwa funktioniert es auch im Körper, der aus 60 bis 75% aus Wasser
              besteht, eine ideale Voraussetzung um die Bowen Impulse
              weiterzuleiten.
            </StyledParagraph>
          </StyledContent>
          <StyledContainer>
            <StyledImage src="/water.jpeg" layout="fill" objectFit="cover" />
          </StyledContainer>
        </StyledSectionThree>
        <StyledQuote>
          "Die Kraft die den Körper erschaffen hat,
          <br /> ist auch fähig den Körper zu heilen."
          <StyledName> J. Dispenza</StyledName>
        </StyledQuote>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 30px;

  ${media("<=phone")} {
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

  ${media("<=phone")} {
    margin: 15px;
  }

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column-reverse;
  }
  ${media("<=tablet")} {
    margin: 0 10px;
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
    margin-top: -60px;
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
    margin-top: 50px;
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

const StyledContent = styled.div`
  width: 45%;
  align-self: baseline;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
    width: calc(100% - 90px);
  }
  ${media("<=tablet")} {
    margin: 0px 20px;
    width: calc(100% - 40px);
    align-self: center;
  }
`;

const StyledTitle = styled.h1`
  font-family: Recoleta Alt Light, sans-serif !important;
  font-size: 1.5em;
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: lighter;
  color: #9e8d8d;
  hyphens: auto;
  ${media("<=phone")} {
    font-size: 1.5em;
    color: Black;
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
`;

const StyledCorridor = styled.div`
  height: 100px; // Adjust as needed
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
    
  transition: opacity 2s ease-in-out;
  background-color: #f4f1e9;
 
}`;
const StyledName = styled.span`
  font-size: 1.2rem;
`;
const StyledText = styled.h1`
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;
  margin-bottom: 100px;
  font-family: "Recoleta Alt Light";
  color: #9e8d8d;
  background-color: #e1ded9;

  ${media("<=phone")} {
    font-size: 1.3rem;

    width: 100%;
  }
  ${media("<=tablet")} {
    font-size: 1.1rem;
    line-height: 2.3rem;
  }
`;
