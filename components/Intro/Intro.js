import styled from "styled-components";
import React from "react";
export default function Intro() {
  return (
    <StyledText>
      Schenke Deinem Körper, Deinem Geist und Deiner Seele <br />
      eine wichtige Auszeit. <br />
      Komme ins Spüren und finde den Weg zurück <br />
      in dein inneres Gleichgewicht.
    </StyledText>
  );
}

const StyledText = styled.p`
  font-size: 1.3rem;
  font-family: "fantasy";
  position: absolute;
  font-weight: 200;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 80%;
`;
