import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
export default function Infos() {
  return (
    <>
      <StyledHeader id="prices">Preise</StyledHeader>
      <StyledContainer>
        <BoldText> Eine Bowen-Anwendung:</BoldText>{" "}
        <h3>
          <strong>60,-Euro </strong>für ca. 60 Min.
        </h3>
        <StyledWrapper>
          <SyledList>
            <StyledParagraph>
              In jeder Anwendung ist ein Vorgespräch und ein kurzes Nachgespräch
              enthalten.
            </StyledParagraph>
          </SyledList>

          <SyledList>
            <StyledParagraph>
              Die Anwendungskosten sind bar zu zahlen. Paypal möglich.{" "}
            </StyledParagraph>
          </SyledList>
          <SyledList>
            <StyledParagraph>
              Im Verhinderungsfall bitte ich, Termine spätestens 24 Stunden
              vorher abzusagen, da sie ansonsten in voller Höhe verrechnet
              werden.
            </StyledParagraph>
          </SyledList>
        </StyledWrapper>
      </StyledContainer>
      <StyledSection>
        <StyledHeader>Ablauf</StyledHeader>
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
const StyledHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin: 50px 0px;
  color: #000;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c7d4b0;
  padding: 30px;
  #prices {
    scroll-margin-top: 100px;
  }
`;
const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 2.3rem;
  margin: 30px;
  text-align: center;
  ${media("<=phone")} {
    text-align: left;
    margin: auto;
  }
`;
const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledParagraphTwo = styled.p`
  font-size: 1.1rem;
  line-height: 2.3rem;
  margin: 30px;
`;
const BoldText = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
const SyledList = styled.li`
  list-style: none;
`;
const StyledWrapper = styled.div`
  text-align: left;
`;
