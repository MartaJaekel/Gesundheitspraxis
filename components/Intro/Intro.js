import React from "react";
// import { useEffect, useRef, useState } from "react";
import media from "css-in-js-media";
import styled, { keyframes } from "styled-components";

export default function Intro() {
  // const [isVisible, setIsVisible] = useState(false);
  // const paragraphRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Update state to indicate whether paragraph is visible
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1, // Change this threshold as needed
  //     }
  //   );

  //   // Start observing the paragraph element
  //   if (paragraphRef.current) {
  //     observer.observe(paragraphRef.current);
  //   }

  //   // Clean up observer on unmount
  //   return () => {
  //     if (paragraphRef.current) {
  //       observer.unobserve(paragraphRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
      <StyledContainer>
        <Waves>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              class="elementor-shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
        </Waves>

        <StyledParagraph
        // ref={paragraphRef}
        // className={isVisible ? "fade-in-text" : ""}
        >
          Schenke Deinem Körper, Deinem Geist und Deiner Seele eine wichtige
          Auszeit. <br />
          Komme ins Spüren und finde den Weg zurück in Dein inneres
          Gleichgewicht.
        </StyledParagraph>
      </StyledContainer>
    </>
  );
}

const Waves = styled.div`
  position: absolute;
  rotate: 180deg;
  width: 100%;
  height: 40px;
  top: -40px;
  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
  }
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 3rem;
  font-family: "Recoleta Alt Light";
  margin: 0px 0px;
  color: #9e8d8d;
  &.fade-in-text {
    line-height: 1.5;
    text-align: center;
    font-size: 1.4rem;

    animation: ${fadeIn} 5s;
  }

  ${media("<=phone")} {
    font-family: "Recoleta Alt Light";
    color: #9e8d8d;
    margin: 0px 10px;
  }
  ${media("<=tablet")} {
    font-size: 1.3rem;
    line-height: 2.3rem;
    margin: 0px 10px;
  }
`;
const StyledContainer = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  

  padding:50px 0px;
   #bowen-technik {
    // scroll-margin-top: 110px;
`;
