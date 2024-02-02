import React from "react";
import styled from "styled-components";

export default function Infos() {
  return (
    <>
      <StyledHeader>Preise</StyledHeader>
      <StyledContainer>
        <StyledParagraph>
          Eine Bowen-Anwendung: 60,-Euro für ca. 60 Min.
          <br /> Die Anwendungskosten sind bar zu zahlen. Paypal möglich. Im
          Verhinderungsfall bitte ich, Termine spätestens 24 Stunden vorher
          abzusagen, da sie ansonsten in voller Höhe verrechnet werden.
        </StyledParagraph>
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
  justify-content: center;
  align-items: center;

  background-color: #c7d4b0;
`;
const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 2.3rem;

  color: black;
  font-weight: lighter;
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
