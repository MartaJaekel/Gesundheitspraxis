import styled from "styled-components";
import React from "react";
import Image from "next/image";
import media from "css-in-js-media";

export default function Intro() {
  return (
    <>
      <StyledContainer>
        <StyledParagraph>
          Schenke Deinem Körper, Deinem Geist und Deiner Seele <br />
          eine wichtige Auszeit. <br />
          Komme ins Spüren und finde den Weg zurück <br />
          in dein inneres Gleichgewicht. <br />
        </StyledParagraph>
      </StyledContainer>
    </>
  );
}
const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  font-family: "Recoleta Alt Light";
  color: #9e8d8d;

  ${media("<=phone")} {
    text-align: center;
    line-height: 2.3rem;
    font-family: "Open Sans", sans-serif;
    color: #9e8d8d;
    margin: 39px;
    font-size: 1.1rem;
  }
  ${media("<=tablet")} {
    font-size: 1.3rem;
    line-height: 2.3rem;
    margin: 0px 10px;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding:50px 0px;
   #bowen-technik {
    scroll-margin-top: 110px;
`;
