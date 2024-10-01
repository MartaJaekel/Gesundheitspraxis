import styled from "styled-components";
import Link from "next/link";

export default function Impressum() {
  return (
    <>
      <StyledWrapper>
        <StyledHeading1>Impressum</StyledHeading1>
        <StyledHeading2>Angaben gemäß § 5 TMG:</StyledHeading2>
        <StyledParagraph>
          Simona Jäkel Gesundheitspraxis
          <br />
          Gesundheitspraktikerin BfG
          <br />
          Simona Jäkel
        </StyledParagraph>
        <StyledHeading3>Postanschrift:</StyledHeading3>
        <StyledParagraph>
          Mehringdamm 31
          <br />
          10961, Berlin
          <br />
        </StyledParagraph>
        <StyledHeading3>Kontakt:</StyledHeading3>
        <StyledParagraph>
          Telefon: +49(0)15788297240
          <br />
          E-Mail: simona.jaekel1@gmail.com
        </StyledParagraph>
        <br />
        <StyledHeading3>
          Die Berufshaftpflichtversicherung wurde abgeschlossen bei:
        </StyledHeading3>
        <StyledParagraph>
          Continentale AG
          <br />
          Ruhrallee 92, 44139 Dortmund
        </StyledParagraph>
        <br />
        <StyledHeading2>Hinweise zur Website</StyledHeading2>
        <StyledHeading3>Urheberrechtliche Hinweise</StyledHeading3>
        <StyledParagraph>
          Simona Jäkel
          <br />
          Web Entwickler: Marta Jäkel
          <br />
          Fotograph: Johan Yesid Corrales Lopez
        </StyledParagraph>
        <StyledHeading2>Information gemäß § 36 VSBG</StyledHeading2>
        <StyledParagraph>
          Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
          alternative Streitbeilegung in Verbrauchersachen) erklärt der
          Betreiber dieser Website:
        </StyledParagraph>
        <StyledParagraph>
          Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </StyledParagraph>
        <StyledParagraph>
          <em>
            Das Impressum wurde mit dem{" "}
            <StyledLink href="https://www.activemind.de/datenschutz/generatoren/impressum/">
              Impressums-Generator der activeMind AG
            </StyledLink>{" "}
            erstellt.
          </em>
        </StyledParagraph>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 138px 30px 30px 20px;
  margin: 0 auto;
  max-width: 800px;
  text-align: left;
  overflow-y: auto;
`;

const StyledHeading1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const StyledHeading2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const StyledHeading3 = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const StyledParagraph = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: underline;
`;
