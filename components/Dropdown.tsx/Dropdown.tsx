import React from 'react'
import styled from 'styled-components'
import media from "css-in-js-media";
import { useState } from "react";

interface DropdownProps {
  onLinkClick?: () => void; // Define onLinkClick as an optional function that returns nothing
  onCloseMenu?: () => void; 
}
export default function Dropdown({ onLinkClick, onCloseMenu}: DropdownProps) {
  
  const [isVisible, setIsVisible] = useState(true);

  // Step 2: Create a function to toggle visibility
  const toggleDropdown = () => { setIsVisible(!isVisible);
    if (onLinkClick) {
      onLinkClick(); // This will call closeDropdown in Navigation, setting showPopUp to false
    }
    if (onCloseMenu) {
      onCloseMenu(); // This will call the function to close the burger menu
    }
  }

  return (
    // Step 4: Adjust rendering based on visibility state
    isVisible && (
      <DropdownContainer>
        <DropdownList>
          {/* Step 3: Pass toggleDropdown to each link */}
          <DropdownItem onClick={toggleDropdown}>
            <DropdownLink href="#bowen-technik">Bowen Technik</DropdownLink>
          </DropdownItem>
          <DropdownItem onClick={toggleDropdown}>
            <DropdownLink href="#lomi">Lomi Lomi</DropdownLink>
          </DropdownItem>
          <DropdownItem onClick={toggleDropdown}>
            <DropdownLink href="#fußreflexzonenmassage">Fußreflexzonenmassage</DropdownLink>
          </DropdownItem>
        </DropdownList>
      </DropdownContainer>
    )
  );
}
const DropdownContainer = styled.div`
  width: 238px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  overflow: hidden;
  position: absolute;
  ${media("<=tablet")} {
 left: -51px;
    z-index: 100;
  
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  background-color: #fff;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;

  &:hover {
    background-color: rgb(245, 245, 237);
  
  }
  ${media("<=phone")} {
  
    text-align: center;
  
  }
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: #958888;
  display: block;
  &:hover {
    color: #c9c5c5}
`;