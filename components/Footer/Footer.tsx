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

  justify-content: center;
  gap: 50px;
  padding: 20px;
  background-color: #ede6d8;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #9e8d8d;

  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
`;