import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledContainer>
      <StyledLink href="/impressum">Impressum</StyledLink>
      <StyledLink href="/datenschutz">Datenschutz</StyledLink>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ede6d8;
  justify-content: space-evenly;
  padding: 20px;
  background-color: #cad4c9;
`;
const StyledLink = styled.a`
  text-decoration: none;
`;
