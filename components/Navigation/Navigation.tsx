import React from "react";
import Link from "next/link";
import styled from "styled-components";
import media from "css-in-js-media";
import { useState } from "react";
import Dropdown from "../Dropdown.tsx/Dropdown";
import { MouseEvent } from "react";
import { useEffect } from "react";
import { keyframes } from "styled-components";
import { useRouter } from "next/router";

interface StyledContainerProps {
  isOpen: boolean;
}
interface SubMenuProps {
  isSubMenuOpen: boolean;
}
interface MobileLinksProps {
  isOpen: boolean;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const router = useRouter();
  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();

    if (href.startsWith("#")) {
      if (router.pathname === "/") {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "instant" });
        }
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }

    setIsOpen(false);
  }

  function toggleMobile(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  function toggleSubmenu(event: MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    setShowPopUp(!showPopUp);
  }
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Angebote",
      href: "",
      icon: (
        <div
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
          onMouseEnter={(event) =>
            (event.currentTarget.style.filter = "brightness(0) invert(1)")
          }
          onMouseLeave={(event) => (event.currentTarget.style.filter = "")}
        >
          <img
            onClick={(event) => toggleSubmenu(event)}
            src={showPopUp ? "chevron-up.svg" : "chevron.svg"}
            alt="chevron"
            style={{ width: "18px", height: "18px" }}
          ></img>
        </div>
      ),
    },

    { name: "Preise", href: "#prices" },
    { name: "Über mich", href: "about" },
    { name: "Kontakt", href: "#contact" },
    { name: "Gallerie", href: "gallery" },
  ];

  function closeDropdown() {
    setShowPopUp(false);
  }
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavContainer>
        <Logo>
          <Link href="/" passHref aria-label="Home">
            <StyledTitle>
              HOLISTIC
              <br />
              TOUCH
            </StyledTitle>
            <StyledLine>
              <img src="/lotus.svg" height={40} width={40} alt="lotus" />
            </StyledLine>
          </Link>
          <Name> SIMONA JÄKEL </Name>
        </Logo>
        {isDesktop ? (
          <StyledContainer isOpen={isOpen}>
            {links.map((link) => (
              <StyledList key={link.name}>
                {link.href.startsWith("#") ? (
                  <StyledLink
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.href)}
                    aria-label={link.name}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      {link.name}
                      {link.icon && (
                        <span style={{ marginLeft: "5px", display: "flex" }}>
                          {link.icon}
                        </span>
                      )}
                    </div>
                  </StyledLink>
                ) : (
                  <Link href={link.href} passHref>
                    <StyledLink href={link.href} aria-label={link.name}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        {link.name}
                        {link.icon && (
                          <span style={{ marginLeft: "5px", display: "flex" }}>
                            {link.icon}
                          </span>
                        )}
                      </div>
                    </StyledLink>
                  </Link>
                )}
                {link.name === "Angebote" && showPopUp && (
                  <Dropdown
                    onLinkClick={closeDropdown}
                    onCloseMenu={() => setIsOpen(false)}
                  />
                )}
              </StyledList>
            ))}
          </StyledContainer>
        ) : (
          <>
            <Burger onClick={() => setIsOpen(!isOpen)}>
              <img src="/menu.svg" width={30} height={30} alt="menu" />
            </Burger>
            <MobileMenu isOpen={isOpen}>
              <div className="flex justify-end p-4">
                <CloseButton onClick={() => setIsOpen(false)}>
                  <img src="/cross.svg" alt="cross" className="h-6 w-6" />
                </CloseButton>
              </div>
              <MobileLinks isOpen={isOpen}>
                <img src="/lotus.svg" width={30} height={30} alt="lotus" />
                <Button onClick={toggleMobile} aria-label="Angebote">
                  Angebote
                </Button>
                {isSubMenuOpen && (
                  <SubMenu isSubMenuOpen={isSubMenuOpen}>
                    <li>
                      <StyledLink
                        href="#bowen-technik"
                        aria-label="Bowen Technik"
                        onClick={(event) =>
                          handleLinkClick(event, "#bowen-technik")
                        }
                      >
                        Bowen Technik
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        href="#lomi"
                        aria-label="Lomi Lomi"
                        onClick={(event) => handleLinkClick(event, "#lomi")}
                      >
                        Lomi Lomi
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        href="#fußreflexzonenmassage"
                        aria-label="Fußreflexzonenmassage"
                        onClick={(event) =>
                          handleLinkClick(event, "#fußreflexzonenmassage")
                        }
                      >
                        Fußreflexzonenmassage
                      </StyledLink>
                    </li>
                  </SubMenu>
                )}
                {links
                  .filter((link) => link.name !== "Angebote")
                  .map((link) => (
                    <StyledList key={link.name}>
                      <Button>
                        <StyledLink
                          href={link.href}
                          onClick={(event) => handleLinkClick(event, link.href)}
                          aria-label={link.name}
                        >
                          {link.name}
                        </StyledLink>
                      </Button>
                    </StyledList>
                  ))}
              </MobileLinks>
            </MobileMenu>
          </>
        )}
      </NavContainer>
    </>
  );
}
const Name = styled.h1`
  font-size: 1rem;
  font-family: Recoleta Alt Light;
  text-align: center;
  color: #bca7a7;
  letter-spacing: 5px;
`;
const Logo = styled.div`
  flex-direction: column;
  align-items: center;
`;
const StyledLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000;
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddcece;
  }
  &:before {
    margin-right: 1em;
  }
  &:after {
    margin-left: 1em;
  }
  ${media("<=tablet")} {
    &:before,
    &:after {
      flex: 0.1;
    }
    &:before {
      margin-right: 0.4em;
    }
    &:after {
      margin-left: 0.4em;
    }
  }
`;

const Button = styled.button`
  font-family: "Recoleta Alt Light";
  border: none;
  color: #958888;
  font-size: 2.1rem;
  width: 100%;
  &:hover {
    font-weight: bold;
  }
`;
const StyledList = styled.li`
  position: relative;
  font-size: 1.1rem;
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;

  display: block;
  font-family: "Recoleta Alt Light";
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SubMenu = styled.ul<SubMenuProps>`
  list-style: none;
  padding: 20px;

  background-color: #f3f0ea;
  border-radius: 8px;
  flex-direction: column;
  display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? "flex" : "none")};

  li {
  padding: 0px;
  margin: 0px;
  width: 100%;
}

 

    &:hover {
      color: #fcf7f1;
     
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.4rem;
  font-family: Recoleta Alt Light;

  font-weight: lighter;
  color: #bca7a7;
  line-height: 2.1rem;

  letter-spacing: 8px;
  text-align: center;
  h1 {
    font-size: 2rem;
    margin: 0px;
    font-style: Italic;
    font-weight: lighter;
  }
  ${media("<=phone")} {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 10%;
  &:hover {
    background-color: #f3f0ea;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  background-color: #fcf7f1;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  padding: 20px 50px;
  z-index: 1;
  height: 140px;

  ${media("<=tablet")} {
    display: block;
    padding-top: 5px;
  }
  ${media("<=phone")} {
    justify-content: center;
    padding: 10px 15px;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  width: 30px;

  div {
    width: 100%;
    height: 2px;
    background-color: #958888;
    transition: all 0.3s ease-in-out;
  }

  ${media("<=tablet")} {
    display: flex;

    position: absolute;
    right: 16px;
    top: 18px;
  }
  ${media("<=desktop")} {
    display: flex;
    position: absolute;
    right: 16px;
    top: 18px;
  }
`;

const MobileMenu = styled.div<StyledContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
  z-index: 2000;
`;

const MobileLinks = styled.ul<MobileLinksProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  animation: ${fadeIn} 3s ease-in-out;

  li {
    font-size: 1.5rem;
    font-family: "Recoleta Alt Light";
    text-align: center;
    color: #958888;

    &:hover {
      color: white;
    }
  }
`;
const StyledContainer = styled.ul<StyledContainerProps>`
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
  ${media("<=desktop")} {
    display: contents;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #958888;
  &:hover {
    font-weight: bold;
  }
`;
