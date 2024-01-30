import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Die Bowen-Technik", href: "/bowen" },
    { name: "Preise & Ablauf", href: "/prices" },
    { name: "Über mich", href: "/About" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <nav>
      <Burger onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <StyledContainer open={open}>
        {links.map((link) => (
          <StyledList key={link.name}>
            <StyledLink href={link.href}>{link.name}</StyledLink>
          </StyledList>
        ))}
      </StyledContainer>
    </nav>
  );
}
const StyledContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  align-items: center;
  list-style: none;
  background-color: #ede6d8;
  padding: 60px 100px;
  margin: 2px 0px;

  @media (max-width: 600px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    padding: 20px;
  }
`;

const Burger = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;
const StyledList = styled.li`
  font-size: 1.1rem;
  font-weight: 200;

  text-decoration: none;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
