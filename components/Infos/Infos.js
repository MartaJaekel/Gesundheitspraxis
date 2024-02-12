import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
export default function Infos() {
  return (
    <>
      <StyledLine>
        <StyledHeader id="prices">Preise</StyledHeader>
      </StyledLine>
      <StyledPriceContainer>
        <StyledWrapper>
          <StyledLeftSection>
            <StyledTitle>Bowen Classic</StyledTitle>
            <StyledDiv1>
              <span>45 Min</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen Ganzkörper (inkl. Kopf und Füße)</StyledTitle>
            <StyledDiv1>
              <span>45 Min</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen für Kopf-Nacken-Rücken</StyledTitle>
            <StyledDiv1>
              <span>45 Min</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen für Arme-Schultern-Rücken</StyledTitle>
            <StyledDiv1>
              <span>45 Minuten</span>
              <span>60 Euro</span>
            </StyledDiv1>
          </StyledLeftSection>
          <StyledRightSection>
            <StyledTitle>Bowen für Becken-Beine-Füsse</StyledTitle>
            <StyledDiv1>
              <span>45 Minuten</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen für die Schwangerschaft</StyledTitle>
            <StyledDiv1>
              <span>45 Minuten</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen für die Geburtsvorbereitung</StyledTitle>
            <StyledDiv1>
              <span>45 Minuten</span>
              <span>60 Euro</span>
            </StyledDiv1>
            <StyledTitle>Bowen für hormonelle Balance</StyledTitle>
            <StyledDiv1>
              <span>45 Minuten</span>
              <span>60 Euro</span>
            </StyledDiv1>
          </StyledRightSection>
        </StyledWrapper>
      </StyledPriceContainer>
      <StyledSection>
        <StyledLine>
          <StyledHeader>Ablauf</StyledHeader>
        </StyledLine>
        <StyledParagraphTwo>
          Die Bowtech-Sitzung findet in der Regel liegend statt, kann aber auch
          im Sitzen durchgeführt werden. Auf der Haut oder über leichte Kleidung
          werden sanfte Griffe gesetzt. Zwischen zwei griffserien Folgen Pausen
          von 2 bis 3 Minuten. Diese Pausen geben den Körper Zeit, die Impulse
          zu verarbeiten und zu integrieren. WICHTIG: Vor und nach der Sitzung
          sollte ausreichend Wasser getrunken werden, da das Fasziensystem
          aktiviert wird und ausreichend Flüssigkeit benötigt. Zudem sollte
          Überanstrengung, Sauna oder andere Wärme oder Kälteanwendungen
          vermieden werden, sowie weitere manuelle Behandlungen um einige Tage
          verschoben werden. Der Körper soll sich die Zeit nehmen können, um
          angestoßene Prozesse wirken zu lassen. Für den weiteren Tag nach der
          Anwendung ist darauf zu achten nicht länger als 30 Minuten am Stück zu
          sitzen, um den Blut und Lymphfluss positiv zu beeinflussen. Kurzes
          aufstehen und wenige Schritte genügen. Nach 2 bis 4 Tagen ist häufig
          eine deutliche Veränderung wahrnehmbar. Wie viele Anwendungen der
          Körper benötigt um wieder in die Balance zu kommen ist sehr
          individuell.
        </StyledParagraphTwo>
      </StyledSection>
    </>
  );
}
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
const StyledHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin: 50px 0px;
  color: #000;
  font-family: "Recoleta Alt Light";
`;

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;

 
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledParagraphTwo = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin: 30px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #cad4c9;
  justify-content: space-evenly;
  gap: 50px;
  padding: 40px 100px;
  margin: 2px 0px;
  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  
  ${media("<=tablet")} {
    display: flex;
    flex-direction: column;
`;
const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv1 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 170px;
  border-bottom: 1px solid white;
  ${media("<=phone")} {
    display: flex;
    flex-direction: row;
  }
`;
const StyledTitle = styled.h2`
  text-align: center;
  color: darkbrown;
  font-family: bodoni, serif;
  font-size: 1.3rem;
  font-weight: lighter;
  hyphens: auto;
`;
