import styled from "styled-components";
import React from "react";
import Image from "next/image";
import media from "css-in-js-media";

export default function Intro() {
  return (
    <StyledContainer>
      <StyledImage src="/flower.png" width={50} height={50} />
      <StyledParagraph>
        Schenke Deinem Körper, Deinem Geist und Deiner Seele <br />
        eine wichtige Auszeit. <br />
        Komme ins Spüren und finde den Weg zurück <br />
        in dein inneres Gleichgewicht. <br />
        <br />
        Du bist es Dir Wert!
      </StyledParagraph>
      <StyledImage src="/flower.png" width={50} height={50} />
      <StyledText id="bowen-technik">
        DIE BOWEN-TECHNIK <br />
        Sanft - Effektiv - Ganzheitlich
      </StyledText>
    </StyledContainer>
  );
}
const StyledParagraph = styled.p`
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;

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
  background-color: #d9d082;
  padding:50px 0px;
   #bowen-technik {
    scroll-margin-top: 110px;
`;
const StyledText = styled.h1`
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;

  font-family: optima, sans-serif;
  color: #9e8d8d;

  ${media("<=phone")} {
    font-size: 1.3rem;
    margin-top: 80px;
    width: 100%;
  }
  ${media("<=tablet")} {
    font-size: 1.1rem;
    line-height: 2.3rem;
    margin: 0px 10px;
  }
`;
const StyledImage = styled(Image)`
  height: 30px;
  width: 30px;
`;
