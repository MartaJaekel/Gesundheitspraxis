import media from "css-in-js-media";
import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background-image: url("/other.png");
 
  background-position: center;
  background-attachment: fixed;

  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    
    
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgb(254 177 177 / 30%),
      rgba(255, 255, 255, 0)
    );
    opacity: 0.5;
    pointer-events: none;
  }
  ${media("<=tablet")} {

    background-position: -706px center;
  }
  ${media("<=phone")} {
   
    background-position: -600px center;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px;
  padding: 20px;
  background-color:#fffffff2; 
  max-width: 1200px;
  margin: auto;
  border-radius: 24px;
  ${media("<=tablet")} {
  display: flex;
  flex-direction: column;
  }
}
`;

const Card = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 24px;
  text-align: center;
  border: 0.7px solid #edd8b8;
  position: relative;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #b0a9a9;
  text-align: left;
  margin-left: 70px;
`;

const Rating = styled.div`
  margin: 10px 0;
  background-color: white;
  border-radius: 16px;
  position: absolute;
  top: 10px;
  left: -33px;
  padding: 2px 14px;
`;

const Star = styled.span`
  color: #e8c300;
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  text-align: left;
  margin-top: 56px;
font-weight: 100;
`;
const Bewertungen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 5rem;
  top: 12rem;

  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  white-space: nowrap;
  h1 {
    font-size: 1.5em;
    color: #e6dcd0;

    margin-bottom: 10px;
  }
  ${media("<=phone")} {
    left: 1rem;
    top: 8rem;
  }
  ${media("<=tablet")} {
    left: 2rem;
    top: 8rem;
  }
  ${media("<=phone")} {
    left: 1rem;
    top: 8rem;
  }
`;
export interface RatingsProps {
  title: string;
  rating: number;
  description: string;
}

const ProductCard: React.FC<RatingsProps> = ({
  title,
  rating,
  description,
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <Rating>
        {[...Array(5)].map((_, i) => (
          <Star key={i}>{i < rating ? "★" : "☆"}</Star>
        ))}
      </Rating>
      <Description>{description}</Description>
    </Card>
  );
};

const CardSection: React.FC = () => {
  const products = [
    {
      title: "Anja",
      rating: 5,
      description:
        "I went to Simona in my early state of pregnancy when I had troubles with back pain. It was reduced by her gentle and efficient Bowen treatment which left a lasting positive influence on my well being throughout the pregnancy. Thank you a lot, Simona!",
    },
    {
      title: "Nicole",
      rating: 5,
      description:
        "Mir hat die Fußreflexzonenmassage sehr gut gefallen. Es wird ja mit etwas mehr Druck gearbeitet, ich habe mich trotzdem so gut entspannt. Simona ist sehr achtsam mit den Berührungen und Druck. Ich fand gut, dass kein „unnötiger Druck“ bis zum Schmerz hin ausgeübt wurde, sondern wirklich rangetastet und gut ge-checkt wurde. Meine Füße fühlen sich wunderbar an. Simona nimmt sich Zeit, alles zu klären und in Ruhe auch abzuschließen, ich fand toll das es ein Nachgespräch gab. Sehr zu empfehlen.",
    },
    {
      title: "Wilfried",
      rating: 5,
      description:
        "Ich hatte über Wochen Schmerzen im Kreuzbereich, die ich nicht mehr mit Schmerzmitteln abdämpfen, sondern loswerden wollte. Von der Bowen-Technik hatte ich über eine Freundin erfahren, die damit gute Erfahrungen gemacht hatte. Drei Tage nach der Behandlung waren die Schmerzen komplett weg! Obwohl ich mit mehreren Behandlungen gerechnet hatte. Simona ist ein sehr einfühlsamer Mensch. Ich habe mich in ihrer Praxis sehr wohl gefühlt und kann sie nach dieser Erfahrung definitiv weiterempfehlen.",
    },
    {
      title: "Linda",
      rating: 5,
      description:
        "Ich war neugierig auf diese Art der Behandlung und es hat sich gelohnt. Es ist weniger eine Massage als eine sehr angenehme Berührungsbehandlung, die kleinen Pausen zwischen den Berührungen fand ich persönlich toll, um wirklich reinzuspüren in meinen Körper und die Entspannung und Weitung wahrzunehmen. Ich bin tiefenentspannt und gelockert nach Hause gegangen!",
    },
    {
      title: "Beatrice",
      rating: 5,
      description:
        "Ich war kürzlich bei Holistic Touch bei Simona Jäkel und kann sie nur wärmstens empfehlen. Von dem Moment an, als ich eintrat, war Simona unglaublich freundlich und einladend, sodass ich mich sofort wohl fühlte. Ihre Liebe zum Detail und ihr intuitives Verständnis dafür, was mein Körper braucht, waren bemerkenswert. Die Umgebung war beruhigend und durch ihren ganzheitlichen Ansatz fühlte ich mich nicht nur körperlich besser, sondern auch geistig und emotional ausgeglichener und zentrierter. Simona nahm sich die Zeit, sich meine Bedenken anzuhören und passte die Sitzung speziell darauf an. Wenn Sie jemanden suchen, der Professionalität mit echter Sorgfalt und Fachwissen verbindet, sind Sie bei Simona an der richtigen Adresse. Ich bin wirklich dankbar für ihre Hilfe und werde auf jeden Fall für weitere Sitzungen wiederkommen!"
    },
    {
      title: "Carmen",
      rating: 5,
      description:
        "Ich war bei Simona wegen eines schmerzhaften Hexenschusses. Simona ist eine sehr einfühlsame und beruhigende Person. Die Behandlung war sehr sanft und ich konnte sehr schnell wieder gerade gehen. Es war eine neue und schöne Erfahrung für mich, und wenn ich es noch einmal brauche, werde ich auf jeden Fall wieder hingehen. Vielen Dank.",
    },
  ];

  return (
    <>
      <BackgroundWrapper>
        {" "}
        <Bewertungen>
          <h1>
            Das sagen Kunden über <br /> Simonas Behandlungen{" "}
          </h1>
        </Bewertungen>
      </BackgroundWrapper>
      <CardContainer>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default CardSection;
