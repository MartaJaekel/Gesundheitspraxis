import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Container>
        <ContentWrapper>
          <ProfileSection>
            <ImageContainer>
              <Image
                src="/beauty.png"
                alt="Simona Jäkel"
                width={200}
                height={200}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  width: "100%",
                }}
              />
            </ImageContainer>
            <Description>
              <h1>Simona Jäkel</h1>
              <Subtitle>Bowen-Practitioner</Subtitle>
              <Subtitle>Gesundheitspraktikerin (BfG)</Subtitle>
              <Subtitle>Mutter von 3 Kindern</Subtitle>
            </Description>
          </ProfileSection>

          <QuoteSection>
            <Quote>
              "Through hands we SERVE, through serving we LOVE <br />
              through loving we CREATE."
            </Quote>
            <Author>- J. Norton</Author>
          </QuoteSection>
        </ContentWrapper>
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
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #ede6d8 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 108px 20px;
`;
const WavesTwo = styled.div`
  width: 100%;
  height: 60px;
  margin-top: -20px;
  rotate: 180deg;
  z-index: 1;
  position: absolute;
  bottom: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: #f2f0f0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 40px 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  h1 {
    font-size: 2.5em;
    color: #726565;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: "Recoleta Alt Bold";
  }

  p {
    font-size: 1.2em;
    margin: 5px 0;
    color: #9f887e;
    font-weight: 100;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #9f887e;
  margin: 5px 0;
`;

const QuoteSection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Quote = styled.p`
  font-size: 1.6em;
  font-style: italic;
  line-height: 1.5;
  color: #7d6b64;
  max-width: 600px;
  margin: 0 auto;
  font-family: "Recoleta Alt Light", serif;
`;

const Author = styled.span`
  font-size: 1em;
  color: #333;
  margin-top: 10px;
  display: block;
  font-family: "Recoleta Alt Light", serif;
`;
