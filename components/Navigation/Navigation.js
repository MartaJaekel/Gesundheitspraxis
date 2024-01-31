import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Navigation() {
  const links = [
    { name: "Die Bowen-Technik", href: "/bowen" },
    { name: "Preise & Ablauf", href: "/prices" },
    { name: "Über mich", href: "/About" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <NavContainer>
      <StyledContainer>
        <ImageContainer>
          <Image src="lotus.svg" alt="lotus" width={100} height={100} />
        </ImageContainer>
        {links.map((link) => (
          <StyledList key={link.name}>
            <StyledLink href={link.href}>{link.name}</StyledLink>
          </StyledList>
        ))}
      </StyledContainer>
    </NavContainer>
  );
}
const NavContainer = styled.nav`
  display: flex;
`;

const StyledContainer = styled.ul`
  position: fixed;
  display: flex;

  gap: 50px;
  align-items: center;
  list-style: none;
  background-color: #ede6d8;
  padding: 10px 100px;
  margin: 2px 0px;
  width: 100%;
`;

const StyledList = styled.li`
  font-size: 1.1rem;
  font-weight: 200;

  text-decoration: none;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: left;
`;
