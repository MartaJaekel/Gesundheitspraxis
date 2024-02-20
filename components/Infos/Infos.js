import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
export default function Infos() {
  return (
    <>
      <StyledTitle>Preise</StyledTitle>
      <GridContainer>
        <GridItem background="#d9b89f">Anwendung</GridItem>
        <GridItem background="#d9b89f">60 Minuten</GridItem>
        <GridItem background="#d9b89f">75 Minuten</GridItem>
        <GridItem background="#e5d5cd">Ganzkörper(inkl.Kopf und Füße)</GridItem>
        <GridItem background="#e5d5cd">-</GridItem>
        <GridItem background="#e5d5cd">80 Euro</GridItem>
        <GridItem background="#e9e0d9">Bowen Classic</GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
        <GridItem background="#e5d5cd">Kopf-Nacken-Rücken</GridItem>
        <GridItem background="#e5d5cd">60 Euro</GridItem>
        <GridItem background="#e5d5cd">-</GridItem>
        <GridItem background="#e9e0d9">Arme-schultern-Rücken</GridItem>
        <GridItem background="#e9e0d9">60 Euro</GridItem>
        <GridItem background="#e9e0d9">-</GridItem>
        <GridItem background="#e5d5cd">Becken-Beine-Füße</GridItem>
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
          Die Bowtech-Sitzung findet in der Regel liegend statt, kann aber auch
          im Sitzen durchgeführt werden. Auf der Haut oder über leichte Kleidung
          werden sanfte Griffe gesetzt. Zwischen zwei griffserien Folgen Pausen
          von 2 bis 3 Minuten. Diese Pausen geben den Körper Zeit, die Impulse
          zu verarbeiten und zu integrieren.
          <br />
          <br />
          <StyledImportant>Wichtig</StyledImportant>
          <br />
          <br />
          Vor und nach der Sitzung sollte ausreichend Wasser getrunken werden,
          da das Fasziensystem aktiviert wird und ausreichend Flüssigkeit
          benötigt. Zudem sollte Überanstrengung, Sauna oder andere Wärme oder
          Kälteanwendungen vermieden werden, sowie weitere manuelle Behandlungen
          um einige Tage verschoben werden. Der Körper soll sich die Zeit nehmen
          können, um angestoßene Prozesse wirken zu lassen. Für den weiteren Tag
          nach der Anwendung ist darauf zu achten nicht länger als 30 Minuten am
          Stück zu sitzen, um den Blut und Lymphfluss positiv zu beeinflussen.
          Kurzes aufstehen und wenige Schritte genügen. Nach 2 bis 4 Tagen
          istswitch häufig eine deutliche Veränderung wahrnehmbar. Wie viele
          Anwendungen der Körper benötigt um wieder in die Balance zu kommen ist
          sehr individuell. Hinweis: Die Bowen-Technik ersetzt keine ärztlichen
          Behandlungen und Beratungen.
        </StyledParagraphTwo>
      </StyledSection>
    </>
  );
}
const StyledTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
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
`;

const GridItem = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.background || "transparent"};
  font-family: "Recoleta Alt Light";

  ${media("<=phone")} {
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
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledParagraphTwo = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin: 30px;
  text-align: center;
  margin: 0px 100px;
  font-family: "Recoleta Alt Light";

  ${media("<=phone")} {
    margin: 0px 25px;
    align-self: center;
  }
  ${media("<=tablet")} {
    margin: 0px 15px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #d9d082;

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
  }
`;
const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  ${media("<=phone")} {
  }
`;
const StyledRightSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv1 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 15px 100px;
  font-family: "Recoleta Alt Light";
  ${media("<=phone")} {
    margin: 0px 25px;
    align-self: center;
    margin: 15px 30px;
  }
`;
const StyledImportant = styled.span`
  font-size: 1.5rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
`;
const ParagraphThree = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  margin: 30px;
  text-align: center;
  margin: 0px 100px;
  font-family: "Recoleta Alt Light";
  ${media("<=phone")} {
    margin: 0px 25px;
    align-self: center;
  }
  ${media("<=tablet")} {
    margin: 0px 15px;
  }
`;
