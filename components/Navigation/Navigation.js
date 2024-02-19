import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import media from "css-in-js-media";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Bowen-Technik", href: "#bowen-technik" },
    { name: "Preise & Ablauf", href: "#prices" },
    { name: "Über mich", href: "about" },
    { name: "Kontakt", href: "#contact" },
  ];
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <NavContainer>
      <StyledTitle>
        Gesundheitspraxis
        <br />
        <h1> Simona Jäkel</h1>
      </StyledTitle>

      <Burger onClick={handleToggle}>
        <div />
        <div />
        <div />
      </Burger>
      <StyledContainer isOpen={isOpen}>
        {links.map((link) => (
          <StyledList key={link.name}>
            <StyledLink href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </StyledLink>
          </StyledList>
        ))}
      </StyledContainer>
    </NavContainer>
  );
}
const StyledTitle = styled.h1`
  font-size: 1.8rem;
  font-family: "Inter Tight", sans-serif;
  font-style: Italic;
  font-weight: lighter;
  color: #958888;
  line-height: 2.1rem;
  text-align: center;
  h1 {
    font-size: 1.8rem;
    margin: 0px;
    font-style: Italic;
    font-weight: lighter;
  }
  ${media("<=phone")} {
    font-size: 1.2rem;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  background-color: #ede6d8;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 100px);
  position: fixed;
  padding: 20px 50px;
  z-index: 1;
  height: 80px;
  ${media("<=tablet")} {
    display: block;
    // padding-top: 5px;
  }
  ${media("<=phone")} {
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    width: 100%;
    padding: 10px 4px;
  }
  ${media("<=desktop")} {
  }
`;
const Burger = styled.div`
  width: 0.5rem;
  margin-top: 0.5rem;
  height: 1.5rem;

  display: none;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 10px; /* Adjust this value to move the burger button up or down */
    right: 40px;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: black;

    transition: all 0.3s linear;
  }
  ${media("<=tablet")} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 10px; /* Adjust this value to move the burger button up or down */
    right: 40px;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background-color: white;

    transition: all 0.3s linear;
  }
`;

const StyledContainer = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  ${media("<=phone")} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    gap: 0;
    width: 100%;
    background-color: #ede6d8;
    padding: 10px 0;
  }
  ${media("<=tablet")} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100px;
    right: 0;
    gap: 0;
    width: 100%;
    background-color: #ede6d8;
    padding: 10px 0;
  }
`;
const StyleImage = styled(Image)`
  border-radius: 50%;
  height: 100%;
  width: auto;
`;
const StyledList = styled.li`
  font-size: 1.1rem;
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  display: inline;
  font-family: "Recoleta Alt Light";
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  ${media("<=phone")} {
    &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
`;

const StyledCaption = styled.figcaption`
  font-size: 1.8rem;
  font-family: "Inter Tight", sans-serif;
  font-style: Italic;
  font-weight: lighter;
  color: #958888;
  line-height: 2.1rem;
  text-align: center;
  h1 {
    font-size: 1.8rem;
    margin: 0px;
    font-style: Italic;
    font-weight: lighter;
  }
  ${media("<=phone")} {
    font-size: 1.2rem;
  }
`;
const SyledFigure = styled.figure`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin: 0;
  height: 100%;
  ${media("<=phone")} {
    margin: 5px 15px;
    display: flex;
    flex-direction: row;
  }
  ${media("<=tablet")} {
    margin: 0px;
  }
  ${media("<=desktop")} {
    gap: 14px;
  }
`;
