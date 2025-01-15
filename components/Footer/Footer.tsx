import React from "react";
import styled from "styled-components";
import Link from "next/link";

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
  gap: 40px;
  padding: 15px;
  background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e8d8d;
  font-family: "Inter Tight", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #706c6c;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
