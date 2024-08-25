import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";

export default function Infos() {
  const treatments = [
    {
      name: "Bowen Schulter-Nacken-Rücken",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
    {
      name: "Bowen für werdende Mütter",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
    {
      name: "Lomi Lomi Massage",
      durations: [
        { duration: "60 Minuten", price: "70 €" },
        { duration: "90 Minuten", price: "90 €" },
        { duration: "120 Minuten", price: "110 €" },
      ],
    },
    {
      name: "Fußreflexzonenmassage",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
    {
      name: "Rückenmassage mit Johanneskrautöl",
      durations: [{ duration: "60 Minuten", price: "60 €" }],
    },
  ];

  return (
    <>
      {/*  */}
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
      <Container id="prices">
        <StyledTitle > Angebote und Preise</StyledTitle>
        <CardsContainer>
        {treatments.map((treatment, index) => (
            <Card key={index}>
              <CardContent>
                <TreatmentName>{treatment.name}</TreatmentName>
                {treatment.durations.map((item, i) => (
                  <Duration key={i}>
                    {item.duration}: {item.price}
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
      </Container>
    </>
  );
}
const Waves = styled.div`
  position: relative;
  rotate: 180deg;
  width: 100%;
  height: 62px;
  top: -20px;
  background-color: white;
  svg {
    width: 100%;
    height: 100%;
    fill: rgb(245, 245, 237);
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #f9f5f0;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TreatmentName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #9e8d8d;
  margin: 0;
  font-family: "Recoleta Alt Light";
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #9e8d8d;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const StyledButton = styled.button`
  padding: 15px 20px;
  margin: auto;
  border-radius: 10px;
  border: none;
  color: #846a6a;
  background-color: #ede6d8;
  ${media("<=phone")} {
    padding: 10px 20px;
  }
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  span {
    font-size: 0.9rem;
    ${media("<=phone")} {
      font-size: 0.6rem;
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
  color: #9e8d8d;
`;

