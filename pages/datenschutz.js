import styled from "styled-components";
export default function Datenschutz() {
  return (
    <>
      <StyledWrapper>
        <h1>Datenschutzerklärung</h1>
        <h3>Grundlegendes, Art der Daten :</h3>
        <p>
          Vertrags- und Kontaktdaten von Kunden und Interessenten, Name,
          Adresse, E-Mail-Adresse, Telefonnummer; Kommunikationsdaten (z.B.
          Telefon, E-Mail).
        </p>
        <p>
          Diese Datenschutzerklärung soll über den Umfang und den Zweck der
          Erhebung und die Verwendung personenbezogener Daten durch Simona Jäkel
          informieren.
        </p>
        <p>
          Ich nehme Ihren Datenschutz sehr ernst und behandele Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Vorschriften.
        </p>
        <p>
          Definitionen der verwendeten Begriffe (z.B. “personenbezogene Daten“,
          “Verarbeitung“) finden Sie in Art. 4 DSGVO.
        </p>
        <h2>Umgang mit Kontaktdaten</h2>
        <p>
          Nehmen Sie mit mir Verbindung auf, werden Ihre Angaben gespeichert,
          damit ich auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage
          zurückgreifen kann. Ohne Ihre Einwilligung werden diese Daten nicht an
          Dritte weitergegeben.
        </p>
        <h2>Rechte des Nutzers</h2>
        <p>
          Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft
          darüber zu erhalten, welche personenbezogenen Daten über Sie
          gespeichert wurden. Sie haben außerdem das Recht auf Berichtigung
          falscher Daten und auf die Verarbeitungseinschränkung oder Löschung
          Ihrer personenbezogenen Daten.
        </p>
        <h2>Löschung von Daten</h2>
        <p>
          Sie haben ein Anrecht auf Löschung Ihrer Daten. Von mir gespeicherte
          Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr vonnöten
          sein, gelöscht.
        </p>
        <h2>Widerspruchsrecht</h2>
        <p>
          Sie können von ihrem Widerspruchsrecht Gebrauch machen und der
          Verarbeitung ihrer personenbezogenen Daten zu jeder Zeit
          widersprechen.
        </p>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled.div`
  margin-left: 30px;
`;
