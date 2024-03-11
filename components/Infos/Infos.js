import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
export default function Infos() {
  return (
    <>
      <StyledLine>
        <StyledTitle id="prices">Preise</StyledTitle>
      </StyledLine>
      <GridContainer>
        <GridItem background="#d9b89f">Anwendung</GridItem>
        <GridItem background="#d9b89f">60 Minuten</GridItem>
        <GridItem background="#d9b89f">75 Minuten</GridItem>
        <GridItem background="#e5d5cd">
          Ganzkörper (inkl.Kopf und Füße)
        </GridItem>
        <GridItem background="#e5d5cd">-</GridItem>
        <GridItem background="#e5d5cd">80 Euro</GridItem>
        <GridItem background="#e9e0d9">Bowen Basis</GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
        <GridItem background="#e5d5cd">Kopf-Nacken-Rücken</GridItem>
        <GridItem background="#e5d5cd">60 Euro</GridItem>
        <GridItem background="#e5d5cd">-</GridItem>
        <GridItem background="#e9e0d9">Becken-Beine-Füße</GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
        <GridItem background="#e5d5cd">Bowen für Mütter und Babys</GridItem>
        <GridItem background="#e5d5cd">60 Euro</GridItem>
        <GridItem background="#e5d5cd">-</GridItem>
        <GridItem background="#e9e0d9">Bowen für Schwangere</GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
        <GridItem background="#e5d5cd">
          Bowen für die Geburtsvorbereitung
        </GridItem>
        <GridItem background="#e5d5cd">60 Euro</GridItem>
        <GridItem background="#e5d5cd">- </GridItem>
        <GridItem background="#e9e0d9">
          Bowen für die Hormonelle Balance
        </GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
      </GridContainer>
      <StyledSection></StyledSection>
      <StyledSection>
        <StyledLine>
          <StyledTitle>Ablauf</StyledTitle>
        </StyledLine>

        <StyledParagraphTwo>
          Die Anwendung beinhaltet ein kurzes Vor- und Nachgespräch und findet
          in der Regel liegend statt, kann aber auch im Sitzen durchgeführt
          werden. Auf der Haut oder über leichte Kleidung werden sanfte Griffe
          gesetzt. Zwischen zwei Griffserien folgen Pausen von 2 bis 3 Minuten.
          Diese Pausen geben dem Körper Zeit, die Impulse zu verarbeiten und zu
          integrieren.
          <br />
          <br />
          WICHTIG: Vor und nach der Sitzung sollte ausreichend Wasser getrunken
          werden, da das Fasziensystem aktiviert und ausreichend Flüssigkeit
          benötigt wird. Zudem sollten Überanstrengung, Sauna oder andere Wärme
          oder Kälteanwendungen vermieden werden sowie weitere manuelle
          Behandlungen um einige Tage verschoben werden. Der Körper soll sich
          die Zeit nehmen können, um angestoßene Prozesse wirken zu lassen. Für
          den weiteren Tag nach der Anwendung ist darauf zu achten, nicht länger
          als 30 Minuten am Stück zu sitzen, um den Blut und Lymphfluss positiv
          zu beeinflussen. Kurzes Aufstehen und wenige Schritte genügen. Nach 2
          bis 4 Tagen ist häufig eine deutliche Veränderung wahrnehmbar. Wie
          viele Anwendungen der Körper benötigt, um wieder in die Balance zu
          kommen, ist sehr individuell. Hinweis: Die Bowen-Technik ersetzt keine
          ärztlichen Behandlungen und Beratungen.
        </StyledParagraphTwo>
        <StyledButton
          onClick={() =>
            window.open(
              "https://buchung.treatwell.de/ort/gesundheitspraxis-simona-jaekel/",
              "_blank"
            )
          }
        >
          Jetzt Buchen
        </StyledButton>
        {/* </StyledLink> */}
      </StyledSection>
      {/* <StyledLink href="https://buchung.treatwell.de/ort/gesundheitspraxis-simona-jaekel/"> */}
    </>
  );
}

const StyledButton = styled.button`
  padding: 15px 20px;
  width: 150px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  color: black;

  background-color: #ede6d8;
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
const StyledTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
  color: #9e8d8d;

  // scroll-margin-top: 20%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 500px)); /* 3 columns */
  grid-template-rows: repeat(9, auto); /* 9 rows */
  grid-gap: 1px; /* Gap between grid items */
  margin: 0px 100px;
  background-color: white;
  ${media("<=phone")} {
    margin: 10px;
  }
  ${media("<=tablet")} {
    justify-content: center;
  }
  ${media("<=desktop")} {
    justify-content: center;
    margin: 0px 30px;
  }
`;

const GridItem = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.background || "transparent"};
  font-family: "Recoleta Alt Light";
  hyphens: auto;
  color: #9e8d8d;
`;
const StyledLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 100px;
  color: #9e8d8d;
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
  ${media("<=tablet")} {
    margin: 30px 70px;
  }
`;

const StyledSection = styled.div`
  align-items: center;
  text-align: center;
`;
const StyledParagraphTwo = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin: 30px;
  text-align: center;
  margin: 0px 100px;
  font-family: "Recoleta Alt Light";
  color: #9e8d8d;
  ${media("<=phone")} {
    margin: 0px 25px;
    align-self: center;
  }
  ${media("<=tablet")} {
    margin: 0px 15px;
  }
`;
