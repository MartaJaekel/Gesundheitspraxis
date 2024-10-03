import Image from "next/image";
import media from "css-in-js-media";
import styled from "styled-components";

export default function Main() {
  return (
    <div>
      <Waves>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </Waves>
      <StyledWrapper>
        <StyledBowen>
          <StyledContentBowen>
            <StyledTitle id="bowen-technik">
              DIE BOWEN-TECHNIK <br />
              Sanft - Effektiv - Ganzheitlich
            </StyledTitle>
            <StyledParagraphBowen>
              Die Bowen Technik (Kurzform: Bowtech) ist eine ganzheitliche,
              sanfte Muskel und Bindegewebsmethode, die in den 50er Jahren von
              Tom Bowen in Australien entwickelt wurde. Eine Reihe von sanften
              Impulsen im Bereich des Muskel- und Fasziensystems helfen dem
              Körper, seine Ressourcen der Selbstregulation optimal zu nutzen
              und wieder in Balance zu kommen. Die Bowen-Technik ist
              hervorragend geeignet, um Wohlbefinden und Gesundheit zu erlangen
              und zu erhalten.
            </StyledParagraphBowen>
          </StyledContentBowen>
        </StyledBowen>

        <StyledCorridor />
        <StyledLine>
          <img src="/target.svg" alt="target" width={40} height={40} />
        </StyledLine>
        <Div>
          <StyledSectionReverse>
            <StyledContent>
              <StyledTitle>ANWENDUNGSBEREICHE</StyledTitle>

              <StyledParagraph>
                Die Bowen-Technik wird u. a. angewendet bei:
              </StyledParagraph>
              <StyledUl className="ml-6 list-disc [&>li]:mt-2">
                <li>Rückenschmerzen verschiedenen Ursprungs</li>
                <li>
                  Verspannungen und Verhärtungen der Muskulatur im
                  Rücken-Schulter und Nackenbereich
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
                src="/neu.JPG"
                layout="fill"
                objectFit="cover"
                alt="technik"
              />
            </StyledContainer>
          </StyledSectionReverse>
        </Div>
        <StyledCorridor />
        <StyledLine>
          <img src="/target.svg" alt="target" width={40} height={40} />
        </StyledLine>
        <Div>
          <Impact>
            <StyledTitle>Ablauf</StyledTitle>
            <StyledParagraph>
              Die Anwendung beinhaltet ein kurzes Vor- und Nachgespräch und
              findet in der Regel liegend statt, kann aber auch im Sitzen
              durchgeführt werden. Auf der Haut oder über leichte Kleidung
              werden sanfte Griffe gesetzt. Die gesetzten Impulse stimulieren
              bestimmte Nervenrezeptoren (Propriozeptoren u. Nozizeptoren) im
              Muskel und Fasziensystem. Dadurch wird der Energiefluss angeregt,
              die Muskeln entspannen sich und das Nervensystem wird
              ausbalanciert. Zwischen zwei Griffserien folgen Pausen von 2 bis 3
              Minuten. Diese Pausen geben dem Körper Zeit, die Impulse zu
              verarbeiten und zu integrieren.
            </StyledParagraph>
          </Impact>
        </Div>
        <Div>
          <Zusatz>
            <StyledTitle>Weitere Informationen</StyledTitle>
            <Info>
              Auf der Webseite der{" "}
              <a href="https://www.bowen-academy.at/">Bowen-Akademie</a> kannst
              du alles über die Geschichte, Wirkungsweise, Anwendungsgebiete und
              Erfolge der Bowen-Technik nachlesen. Dort findest du auch
              veröffentlichte{" "}
              <a href="https://www.bowen-academy.at/methode/forschung/">
                Forschungsstudien.
              </a>
              <p>
                {" "}
                Ein kurzer{" "}
                <a href="https://www.youtube.com/embed/QjXPGLXED5E?si=k_69J2HMGj5Ht9oI">
                  Beitrag
                </a>{" "}
                im österreichischen Fernsehsender ORF vom 26.04.2017 gibt dir in
                wenigen Minuten einen guten Überblick über die Bowen-Technik.
              </p>
            </Info>

            <StyledQuote>
              "Die Kraft, die den Körper erschaffen hat, ist auch fähig, den
              Körper zu heilen."
              <StyledName> J. Dispenza</StyledName>
            </StyledQuote>
          </Zusatz>
        </Div>

        <StyledLine>
          <img src="/target.svg" alt="target" width={40} height={40} />
        </StyledLine>
        <Div>
          <LomiLomi>
            <StyledContainer>
              <StyledImage
                src="/butterfly.JPG"
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
                entwickelt, nutzt diese Methode sanfte, fließende Bewegungen,
                die oft mit den Händen und Unterarmen ausgeführt werden. Die
                Massage soll Blockaden lösen, Stress abbauen und die natürliche
                Harmonie des Körpers wiederherstellen. Langsame, fließende
                Massagegriffe wechseln sich bei der Lomi Lomi mit dynamischen,
                kraftvollen ab, um tiefe Entspannung und ein Gefühl von innerem
                Frieden zu fördern. Ideal für alle, die eine ganzheitliche
                Wellness-Erfahrung suchen.
              </StyledParagraph>
            </StyledContent>
          </LomiLomi>
        </Div>
        <StyledLine>
          <img src="/target.svg" alt="target" width={40} height={40} />
        </StyledLine>
        <Div>
          <FußReflexZonen>
            <StyledContent>
              <StyledTitle id="fußreflexzonenmassage">
                FUßREFLEXZONENMASSAGE
              </StyledTitle>
              <StyledParagraph>
                <strong>Fußreflexzonenmassage nach Schwester Jubilata:</strong>{" "}
                <br /> Fußreflexzonen als Schlüssel zum ganzen Körper. <br />{" "}
                Schwester Jubilata entdeckte die Fußreflexzonen als Schlüssel
                zur ganzheitlichen Behandlung ohne Medikamente. Der gesamte
                Körper ist in den Füßen abgebildet, alle Organe, Muskeln,
                Knochen, Gelenke sowie Drüsen finden sich an den Füßen, Händen
                und Ohren wieder. Ihr Weg führt sie zu den Theorien von dem
                Begründer der Zonentherapie Dr. W. H. Fitzgerald, hatte Eunice
                D. Ingham die Behandlung wesentlich weiter entwickelt. Schwester
                Jubilata wandte diese mit herausragenden Ergebnissen bei den
                Kranken an. Im Kloster Strahlfeld ab 2003. Empfindliche Stellen
                an den Füßen sind Anzeiger für Disharmonien im Körper. Diese
                „Fußlandkarte“ wird durch Druck mit den Händen als auch durch
                Hilfe eines Holzstöckchens ertastet. Eine erhöhte
                Schmerzempfindlichkeit an den entsprechenden Reflexpunkten am
                Fuß deutet auf Beschwerden des dazugehörigen Organs hin.
              </StyledParagraph>
            </StyledContent>
            <StyledContainerFeet>
              <StyledImageFeet src="/organe.png" alt="fuss" />
            </StyledContainerFeet>
          </FußReflexZonen>
        </Div>
        <Div>
          <PartTwo>
            <p>
              {" "}
              Ziel der Reflexzonenmassage ist es, die durch Ablagerungen
              blockierte Verbindung zwischen den einzelnen Organen oder
              Körperteilen in Füßen und Händen wiederherzustellen. Der gesamte
              Körper kann durch die Reflexzonenarbeit am Fuß regeneriert werden.
              Stauungen können gelöst werden, dadurch kann die Energie wieder
              fließen. Verspannte oder kranke Zonen des Körpers werden besser
              durchblutet und die Selbstheilungkräfte werden aktiviert.
            </p>
          </PartTwo>
        </Div>
      </StyledWrapper>
      <WavesTwo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="elementor-shape-fill"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </WavesTwo>
    </div>
  );
}
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
    fill: #f9f5f1;
  }
`;
const StyledWrapper = styled.div`
  margin: auto;
  max-width: 1280px;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const StyledBowen = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const StyledContentBowen = styled.div`
  margin: 0px 100px;
  ${media("<=phone")} {
    margin: 0px 48px;
  }
  ${media("<=tablet")} {
    margin: 0px 48px;
  }
`;
const StyledParagraphBowen = styled.p`
  font-size: 1.1rem;
  line-height: 1.75rem;
  color: #9e8d8d;
  font-family: "Inter Tight", sans-serif;
  font-weight: 100;
  margin-top: 24px;
`;
const WavesTwo = styled.div`
  position: relative;
  rotate: 180deg;
  width: 100%;
  height: 36px;

  background-color: #f9f5f1;
  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;
const Div = styled.div`
  width: 100%;
  margin: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;
  gap: 24px;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column-reverse;
  }
  ${media("<=tablet")} {
    margin: 0px 48px;
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
    height: 235px;
  }
  ${media("<=tablet")} {
    width: 100%;
    300px;
  }
`;
const StyledContainerFeet = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  ${media("<=desktop")} {
    width: 100%;
    height: 600px;
  }
  ${media("<=tablet")} {
    width: 100%;
    height: 300px;
  }
  ${media("<=phone")} {
    width: 100%;
    height: 235px;
  }
`;

const StyledContent = styled.div`
  width: 45%;
  align-self: baseline;
  float: left;
  display: flex;
  flex-flow: column;
  gap: 24px;
  ${media("<=desktop")} {
    width: 100%;
    align-self: center;
  }
`;

const StyledSectionReverse = styled(StyledSection)`
  display: flex;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
  }
  ${media("<=desktop")} {
    flex-direction: column;
  }
`;
const Impact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px 100px;
  gap: 24px;
  ${media("<=phone")} {
    align-self: center;
  }
  ${media("<=tablet")} {
    margin: 0px 48px;
  }
  ${media("<=desktop")} {
    flex-direction: column;
  }
`;

const PartTwo = styled.div`
  margin: 10px 100px;

  p {
    font-size: 1.1rem;
    line-height: 1.75rem;
    color: #9e8d8d;
    font-family: "Inter Tight", sans-serif;
    font-weight: 100;
  }

  ${media("<=phone")} {
  }

  ${media("<=tablet")} {
    padding-left: 0px;
    margin: 15px 48px;
  }
`;

const Zusatz = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px 100px;
  gap: 24px;
  ${media("<=phone")} {
  }
  ${media("<=tablet")} {
    margin: 0px 48px;
    margin-top: 20px;
  }
`;
const Info = styled.div`
  font-size: 1.1rem;
  line-height: 1.75rem;
  width: 100%;
  color: #9e8d8d;
  text-align: left;
  font-family: "Inter Tight", sans-serif;
  font-weight: 100;
  text-align: left;
  margin-top: 20px;
  a {
    color: #9e8d8d;
    text-decoration: underline;

    &:hover {
      color: #000;
    }
  }
`;
const FußReflexZonen = styled.section`
  display: flex;
  margin: 0 100px;
  justify-content: space-between;
  gap: 24px;

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
  }
  ${media("<=tablet")} {
    margin: 0px 48px;
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
  gap: 24px;
  ${media("<=tablet")} {
    margin: 0px 48px;
  }
  ${media("<=desktop")} {
    flex-direction: column-reverse;
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
    border-bottom: 1px solid #e2e0e0;
  }
  &:before {
    margin-right: 2em;
  }
  &:after {
    margin-left: 2em;
  }
`;

const StyledImage = styled(Image)`
  float: left;

  width: 300px;
  height: auto;
`;
const StyledImageFeet = styled.img`
  position: absolute;
  height: 85%;
  width: 100%;
  object-fit: cover;
  color: transparent;

  ${media("<=tablet")} {
    object-fit: contain;
    height: 100%;
    inset: -5px;
  }
  ${media("<=phone")} {
    object-fit: contain;
    height: 100%;
    inset: -5px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.9em;
  font-style: normal;
  font-weight: 400;
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
    text-align: left;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.75rem;
  width: 100%;
  color: #9e8d8d;
  text-align: left;
  font-family: "Inter Tight", sans-serif;
  font-weight: 100;
`;

const StyledUl = styled.ul`
  font-size: 1.1rem;
  line-height: 1.75rem;
  color: #9e8d8d;
  font-family: "Inter Tight", sans-serif;
  font-weight: 100;
`;

const StyledCorridor = styled.div`
  height: 20px;
`;

const StyledQuote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 40px 80px;
  padding: 20px;
  line-height: 2rem;
  font-size: 1.25rem;
  opacity: 0.9;
  font-family: "Recoleta Alt Light", serif;
  color: #7a6f6f;
  transition: opacity 1.5s ease-in-out;
  background-color: #faf9f6;
  border-left: 4px solid #e8e3e3;

  ${media("<=tablet")} {
    margin: 0px 8px;
    margin-top: 20px;
  }
`;

const StyledName = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  font-style: italic;
  color: #9e8d8d;
`;
