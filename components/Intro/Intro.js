import styled from "styled-components";
import React from "react";
import Image from "next/image";
export default function Intro() {
  return (
    <StyledContainer>
      <Image src="/flower.png" width={50} height={50} />
      <StyledParagraph>
        Schenke Deinem Körper, Deinem Geist und Deiner Seele <br />
        eine wichtige Auszeit. <br />
        Komme ins Spüren und finde den Weg zurück <br />
        in dein inneres Gleichgewicht. <br />
        <br />
        Du bist es Dir Wert!
      </StyledParagraph>
      <Image src="/flower.png" width={50} height={50} />
      <StyledText>
        DIE BOWEN-TECHNIK <br />
        Sanft - Effektiv - Ganzheitlich
      </StyledText>
    </StyledContainer>
  );
}
const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.3rem;
  font-family: "Open Sans", sans-serif;
  color: #9e8d8d;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const StyledText = styled.h1`
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: center;

  font-family: optima, sans-serif;
  color: #9e8d8d;
`;
