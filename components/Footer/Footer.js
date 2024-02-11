import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledContainer>
      <a href="/impressum">
        <p>Impressum</p>
      </a>
      <a href="#">
        <p>Datenschutz</p>
      </a>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ede6d8;
  justify-content: center;
  gap: 50px;
  background-color: #c7d4b0;
  border-top: 1px solid #6ba77a;
`;
