import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
import Ratings from "../Ratings/Ratings";

export default function Prices() {
  const treatments = [
    {
      name: "Lomi Lomi Massage",
      durations: [
        { duration: "60 Minuten", price: "75 €" },
        { duration: "90 Minuten", price: "105 €" },
        { duration: "120 Minuten", price: "130 €" },
      ],
    },
    {
      name: "Aromaölmasssage",
      durations: [
        { duration: "60 Minuten", price: "65 €" },
        { duration: "90 Minuten", price: "95 €" },
      ],
    },
    {
      name: "Fußreflexzonenmassage",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },

    {
      name: "Ganzkörpermassage",
      durations: [
        { duration: "60 Minuten", price: "65 €" },
        { duration: "90 Minuten", price: "95 €" },
        { duration: "120 Minuten", price: "125 €" },
      ],
    },
    {
      name: "Schulter-, Rücken- & Nackenmassage",
      durations: [
        { duration: "45 Minuten", price: "50 €" },
        { duration: "60 Minuten", price: "65 €" },
      ],
    },
    {
      name: "Ganzheitliche Massage",
      durations: [
        { duration: "60 Minuten", price: "65 €" },
        { duration: "90 Minuten", price: "95 €" },
        { duration: "120 Minuten", price: "125 €" },
      ],
    },
    {
      name: "Bowen - Schulter, Nacken & Rücken",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
    {
      name: "Bowen - Entspannung für werdende Mütter",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
  ];

  return (
    <>
      {/*  */}

      <Container id="prices">
        <StyledTitle> ANGEBOTE UND PREISE</StyledTitle>
        <StyledSubtitle>Massage-Gutscheine erhältlich</StyledSubtitle>
        <CardsContainer>
          {treatments.map((treatment, index) => (
            <Card key={index}>
              <CardContent>
                <TreatmentName>{treatment.name}</TreatmentName>
                {treatment.durations.map((item, i) => (
                  <Duration key={i}>
                    <span>{item.duration}</span>
                    <span> {item.price}</span>
                  </Duration>
                ))}
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
        <Wrapper>
          <StyledButton
            onClick={() =>
              window.open(
                "https://buchung.treatwell.de/ort/gesundheitspraxis-simona-jaekel/",
                "_blank"
              )
            }
          >
            <span>Jetzt Buchen</span>
          </StyledButton>
        </Wrapper>
        <Ratings />
      </Container>
    </>
  );
}
const StyledSubtitle = styled.div`
  font-size: 1.1rem;
  text-align: center;
  font-family: "Recoleta Alt Light", serif;
  color: #8c7d7d;
  font-weight: 400;
  padding: 10px 20px;
  background-color: #f9f4f0;
  border: 1px solid #d2c4b5;
  border-radius: 8px;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  background-color: #fffdfb;
  border-radius: 6px;
  padding: 30px;
  width: 340px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 13px 0px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  gap: 48px;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TreatmentName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #8c7d7d;
  margin-bottom: 10px;
  font-family: "Recoleta Alt Light", serif;
  text-align: left;
`;

const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 1rem;
  font-family: "Inter Tight", sans-serif;
  color: #8c7d7d;
  padding: 5px;
  border-bottom: 1px solid #e5e5e5;
  span {
    font-size: 1rem;
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;

  ${media("<=desktop")} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ${media("<=tablet")} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  border-radius: 15px;

  color: white;
  background-color: #d2c4b5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    font-size 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #d2c4b5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 20px;
  }

  span {
    font-size: 1rem;
  }

  ${media("<=phone")} {
    padding: 10px 20px;
    span {
      font-size: 0.8rem;
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
  color: #9e8d8d;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
