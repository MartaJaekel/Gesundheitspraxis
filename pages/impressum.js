import styled from "styled-components";
export default function Impressum() {
  return (
    <>
      <StyledWrapper>
        <h1>Impressum</h1>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>
          Simona Jäkel Gesundheitspraxis
          <br />
          Gesundheitspraktikerin BfG
          <br />
          Simona Jäkel
        </p>
        <h3>Postanschrift:</h3>
        <p>
          Mehringdamm 31
          <br />
          10961, Berlin
          <br />
        </p>
        <h3>Kontakt:</h3>
        <p>
          Telefon: +49(0)15788297240
          <br />
          E-Mail: simona.jaekel1@gmail.com
        </p>
        <br />
        <h3>Die Berufshaftpflichtversicherung wurde abgeschlossen bei:</h3>
        <p>
          Continentale AG
          <br />
          Ruhrallee 92, 44139 Dortmund
        </p>
        <h3>Geltungsbereich des Versicherungsschutzes:</h3>
        <br />
        <h2>Hinweise zur Website</h2>
        <h3>Urheberrechtliche Hinweise</h3>
        <p>
          Simona Jäkel
          <br />
        </p>
        <p></p>
        <h2>Information gemäß § 36 VSBG</h2>
        <p>
          Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
          alternative Streitbeilegung in Verbrauchersachen) erklärt der
          Betreiber dieser Website:
        </p>
        <p>
          Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          <em>
            Das Impressum wurde mit dem{" "}
            <a href="https://www.activemind.de/datenschutz/generatoren/impressum/">
              Impressums-Generator der activeMind AG
            </a>{" "}
            erstellt.
          </em>
        </p>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled.div`
  margin-left: 30px;
`;
