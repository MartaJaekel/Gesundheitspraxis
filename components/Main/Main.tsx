import Image from "next/image";
import media from "css-in-js-media";
import styled, { keyframes } from "styled-components";
import React, { useEffect, useRef, useState } from "react";

export default function Main() {
  return (
    <div>
      <Waves>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          alt="waves"
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
      <StyledWrapper>
        <StyledSection>
          <StyledContainer>
            <StyledImage
              src="/move.jpg"
              layout="fill"
              objectFit="cover"
              alt="move"
            />
          </StyledContainer>
          <StyledContent>
            <StyledTitle id="bowen-technik">
              DIE BOWEN-TECHNIK <br />
              Sanft - Effektiv - Ganzheitlich
            </StyledTitle>
            <StyledParagraph>
              Die Bowen Technik (Kurzform: Bowtech) ist eine ganzheitliche,
              sanfte Muskel und Bindegewebsmethode, die in den 50er Jahren von
              Tom Bowen in Australien entwickelt wurde. Eine Reihe von sanften
              Impulsen im Bereich des Muskel- und Fasziensystems helfen dem
              Körper, seine Ressourcen der Selbstregulation optimal zu nutzen
              und wieder in Balance zu kommen. Die Bowen-Technik ist
              hervorragend geeignet, um Wohlbefinden und Gesundheit zu erlangen
              und zu erhalten.
            </StyledParagraph>
          </StyledContent>
        </StyledSection>

        <StyledCorridor />
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>

        <StyledSectionReverse>
          <StyledContent>
            <StyledTitle>ANWENDUNGSBEREICHE</StyledTitle>

            <StyledParagraph>
              Die Bowen-Technik wird u. a. angewendet bei:
            </StyledParagraph>
            <StyledUl>
              <li>Rückenschmerzen verschiedenen Ursprungs</li>
              <li>
                Verspannungen und Verhärtungen der Muskulatur im Rücken-Schulter
                und Nackenbereich
              </li>
              <li>ISG-Blockaden</li>
              <li>Kniebeschwerden</li>
              <li>
                Schwangerschaftsbegleitung wie z. B. Rückenschmerzen, Übelkeit
              </li>
              <li>Baby-Koliken, Schlafprobleme bei Babys</li>
              <li>Kinderwunsch</li>
            </StyledUl>
          </StyledContent>
          <StyledContainer>
            <StyledImage
              src="/technik.jpeg"
              layout="fill"
              objectFit="cover"
              alt="technik"
            />
          </StyledContainer>
        </StyledSectionReverse>
        <StyledCorridor />
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>
        <Impact>
          <StyledTitle>Ablauf</StyledTitle>
          <StyledParagraph>
            Die Anwendung beinhaltet ein kurzes Vor- und Nachgespräch und findet
            in der Regel liegend statt, kann aber auch im Sitzen durchgeführt
            werden. Auf der Haut oder über leichte Kleidung werden sanfte Griffe
            gesetzt. Die gesetzten Impulse stimulieren bestimmte
            Nervenrezeptoren (Propriozeptoren u. Nozizeptoren) im Muskel und
            Fasziensystem. Dadurch wird der Energiefluss angeregt, die Muskeln
            entspannen sich und das Nervensystem wird ausbalanciert. Zwischen
            zwei Griffserien folgen Pausen von 2 bis 3 Minuten. Diese Pausen
            geben dem Körper Zeit, die Impulse zu verarbeiten und zu
            integrieren.
          </StyledParagraph>
        </Impact>
        <Zusatz>
          <StyledTitle>Weitere Informationen</StyledTitle>
          <Info>
            Auf der Webseite der Bowen-Akademie (
            <a href="https://www.bowen-academy.at/">www.bowen-akademie.com</a>)
            kannst du alles über die Geschichte, Wirkungsweise,
            Anwendungsgebiete und Erfolge der Bowen-Technik nachlesen. Dort
            findest du auch veröffentlichte Forschungsstudien (
            <a href="https://www.bowen-academy.at/methode/forschung/">
              https://www.bowen-academy.at/methode/forschung/
            </a>
            ).
            <p>
              {" "}
              Ein kurzer Beitrag im österreichischen Fernsehsender ORF vom
              26.04.2017 gibt dir in wenigen Minuten einen guten Überblick über
              die Bowen-Technik.
            </p>
          </Info>
          <VideoWrapper>
            <iframe
              width="300"
              height="236"
              src="https://www.youtube.com/embed/QjXPGLXED5E?si=k_69J2HMGj5Ht9oI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </VideoWrapper>
        </Zusatz>
        <StyledQuote>
          "Die Kraft, die den Körper erschaffen hat, ist auch fähig, den Körper
          zu heilen."
          <StyledName> J. Dispenza</StyledName>
        </StyledQuote>
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>
        <LomiLomi>
          <StyledContainer>
            <StyledImage
              src="/lomi.jpg"
              layout="fill"
              objectFit="cover"
              alt="move"
            />
          </StyledContainer>
          <StyledContent>
            <StyledTitle id="lomi">LOMI LOMI MASSAGE</StyledTitle>
            <StyledParagraph>
              Die Lomi Lomi Massage ist eine traditionelle hawaiianische
              Heilmassage, die sowohl den Körper als auch den Geist anspricht.
              Ursprünglich von den Kahunas, den spirituellen Heilern Hawaiis,
              entwickelt, nutzt diese Methode sanfte, fließende Bewegungen, die
              oft mit den Händen und Unterarmen ausgeführt werden. Die Massage
              soll Blockaden lösen, Stress abbauen und die natürliche Harmonie
              des Körpers wiederherstellen. Langsame, fließende Massagegriffe
              wechseln sich bei der Lomi Lomi mit dynamischen, kraftvollen ab,
              um tiefe Entspannung und ein Gefühl von innerem Frieden zu
              fördern. Ideal für alle, die eine ganzheitliche Wellness-Erfahrung
              suchen.
            </StyledParagraph>
          </StyledContent>
        </LomiLomi>
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>

        <FußReflexZonen>
          <StyledContent>
            <StyledTitle id="fußreflexzonenmassage">
            FUßREFLEXZONENMASSAGE
            </StyledTitle>
            <StyledParagraph>
              <strong>Fußreflexzonenmassage nach Schwester Jubilata:</strong> <br/> Fußreflexzonen als
              Schlüssel zum ganzen Körper. <br/> Schwester Jubilata entdeckte die
              Fußreflexzonen als Schlüssel zur ganzheitlichen Behandlung ohne
              Medikamente. Der gesamte Körper ist in den Füßen abgebildet, alle
              Organe, Muskeln, Knochen, Gelenke sowie Drüsen finden sich an den
              Füßen, Händen und Ohren wieder. Ihr Weg führt sie zu den Theorien
              von dem Begründer der Zonentherapie Dr. W. H. Fitzgerald, hatte
              Eunice D. Ingham die Behandlung wesentlich weiter entwickelt.
              Schwester Jubilata wandte diese mit herausragenden Ergebnissen bei
              den Kranken an. Im Kloster Strahlfeld ab 2003. Empfindliche
              Stellen an den Füßen sind Anzeiger für Disharmonien im Körper.
              Diese „Fußlandkarte“ wird durch Druck mit den Händen als auch
              durch Hilfe eines Holzstöckchens ertastet. Eine erhöhte
              Schmerzempfindlichkeit an den entsprechenden Reflexpunkten am Fuß
              deutet auf Beschwerden des dazugehörigen Organs hin.
            </StyledParagraph>
            
          </StyledContent>
          <StyledContainer>
            <StyledImage
              src="/fuss.jpg"
              layout="fill"
              objectFit="cover"
              alt="fuss"
            />
          </StyledContainer>
        </FußReflexZonen>
        <PartTwo><p>  Ziel der
              Reflexzonenmassage ist es, die durch Ablagerungen blockierte
              Verbindung zwischen den einzelnen Organen oder Körperteilen in
              Füßen und Händen wiederherzustellen. Der gesamte Körper kann durch
              die Reflexzonenarbeit am Fuß regeneriert werden. Stauungen können
              gelöst werden, dadurch kann die Energie wieder fließen. Verspannte
              oder kranke Zonen des Körpers werden besser durchblutet und die
              Selbstheilungkräfte werden aktiviert.</p></PartTwo>
        <StyledLine>
          <img src="/target.png" alt="target" width={40} height={40} />
        </StyledLine>
      </StyledWrapper>
    </div>
  );
}
const PartTwo = styled.div`
margin: 100px;
    margin-top: -32px;
  p{
    font-size: 1.1rem;
    line-height: 2.3rem;
    width: 100%;
    color: #9e8d8d;
    
    font-family: "Recoleta Alt Light";}
    ${media("<=phone")} {
   
    margin: 0px 20px;
  }
  ${media("<=tablet")} {
   
  margin: 0px 20px;
}

`




const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     x 20px;
  
  }
  ${media("<=phone")} {
  
    margin: 0px 20px;
  }

`;
const Zusatz = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 100px;
  ${media("<=phone")} {
   
    margin: 0px 20px;
  }
  ${media("<=desktop")} {
    margin: 0px 20px;
  }
`;
const Info = styled.div`
  font-size: 1.1rem;
  line-height: 2.3rem;
  width: 100%;
  color: #9e8d8d;
  text-align: left;
  font-family: "Recoleta Alt Light";
  text-align: left;
  margin-top: 20px;
  a {
    color: #9e8d8d;

    &:hover {
      color: #000;
    }
  }
`;
const FußReflexZonen  = styled.section`
  display: flex;

  margin: 0 100px;
  justify-content: space-between;



   
  
   
  
  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
  }
  ${media("<=tablet")} {
    
 
    margin: 0px 20px;
  }
  ${media("<=desktop")} {
    display: flex;
    flex-direction: column;
  }
`;
const LomiLomi = styled.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 0 100px;
  ${media("<=phone")} {
    display: flex;
    flex-direction: column-reverse;
    margin: 0px 20px;
  }
  ${media("<=desktop")} {
 flex-direction: column-reverse;
  margin: 0px 20px;
  }
`;
const Impact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px 100px;
  ${media("<=phone")} {
   ;
    align-self: center;
    margin: 0px 20px;

  }
  ${media("<=desktop")} {
    flex-direction: column;
    margin-top: 35px;
    margin: 0px 20px;
  }
`;

const StyledLine = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 100px;
  color: #000;
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #9e8d8d;
  }
  &:before {
    margin-right: 2em;
  }
  &:after {
    margin-left: 2em;
  }
`;
const Waves = styled.div`
  position: relative;
  rotate: 180deg;
  width: 100%;
  height: 40px;
  top: -20px;
  background-color: white;
  svg {
    width: 100%;
    height: 100%;
    fill: rgb(245, 245, 237);
  }
`;
const StyledWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 30px;

  ${media("<=phone")} {
    margin-top: 0px;
  }
  ${media("<=desktop")} {
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column-reverse;
  }
  ${media("<=tablet")} {
    margin: 0 30px;
  }
  ${media("<=phone")} {
    margin: 0px 20px;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 50%;
   height: 500px;

  ${media("<=desktop")} {
    width: 100%;
    height: 450px;
  }
  ${media("<=phone")} {
    width: 100%;
    height: 280px;
  }
  ${media("<=tablet")} {
    width: 100%;
    300px;
  }
`;

const StyledSectionReverse = styled(StyledSection)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
  ${media("<=desktop")} {
    flex-direction: column;
  }
`;

const StyledImage = styled(Image)`
  float: left;
  margin-right: 20px; /* Space between image and text */
  width: 300px; /* Adjust the size of the image */
  height: auto;
`;

const StyledContent = styled.div`
  width: 45%;
  align-self: baseline;
  float: left;
  ${media("<=desktop")} {
    width: 100%;
    align-self: center;
    margin: 15px 20px;
  }
  ${media("<=phone")} {
    margin: 0px 20px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: lighter;
  color: #9e8d8d;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin: 0px;
  font-family: "Inter Tight", sans-serif;

  scroll-margin-top: 150px;
  ${media("<=phone")} {
    font-size: 1.5em;
    hyphens: auto;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 2.3rem;
  width: 100%;
  color: #9e8d8d;
  text-align: left;
  font-family: "Recoleta Alt Light";
`;

const StyledUl = styled.ul`
  font-size: 1.1rem;
  line-height: 2.3rem;
  color: #9e8d8d;
  font-family: "Recoleta Alt Light";
`;

const StyledCorridor = styled.div`
  height: 20px; // Adjust as needed
`;
const StyledQuote = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 60px 100px;
  padding: 30px;
  line-height: 2.3rem;
  font-size: 1.5rem;
  opacity: 2;
  font-family: "Recoleta Alt Light";
  color: #9e8d8d;
  transition: opacity 2s ease-in-out;
  background-color: #f4f1e9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  ${media("<=phone")} {
margin: 40px 20px;

  }
  ${media("<=desktop")} {

    margin: 40px 20px;
  }
`;
const StyledName = styled.span`
  font-size: 1.2rem;
`;
