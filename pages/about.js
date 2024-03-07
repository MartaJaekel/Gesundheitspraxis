import React from "react";
import { styled, css } from "styled-components";
import Image from "next/image";
import Navigation from "../components/Navigation/Navigation";
import media from "css-in-js-media";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Über mich</title>
        <meta name="description" content=" Über Simona Jäkel" />
        <meta
          property="og:title"
          content=" Über mich - Gesundheitspraxis Simona Jäkel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <a href="/">
          <ImageIcon src="/arrow.svg" alt="arrow" height={20} width={20} />
        </a>
        <AboutMe>
          <Section>
            <ProfileImage>
              <Image
                id="profile-image"
                src="/profile.jpeg"
                alt="profile"
                fill={true}
                objectFit="cover"
                objectPosition="top"
              />
            </ProfileImage>
          </Section>
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

          <Description>
            <h1>Simona Jäkel</h1>
            <p>Bowen-Practitioner</p>
            <p>Gesundheitspraktikerin (BfG)</p>
            <p>Mutter von 3 Kindern</p>
          </Description>
          <Quote>
            <p>
              " Through hands we SERVE, through serving we LOVE
              <br /> through loving we CREATE "
            </p>
            <Author>- J. Norton</Author>
          </Quote>
          <WavesTwo>
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
          </WavesTwo>
        </AboutMe>
      </Container>
    </>
  );
}
const WavesTwo = styled.div`
  width: 100%;
  height: 60px;
  margin-top: -20px;
  rotate: 180deg;

  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
  }
`;
const Waves = styled.div`
  position: absolute;
  width: 100%;
  height: 43px;
  top: 210px;

  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  width: 100%;

  margin: 0px 0px;
  padding: 10px 0px;
`;
const ImageIcon = styled(Image)`
  position: absolute;
  top: 10px;
  left: 10px;
  align-items: center;
  padding: 2px 2px;
  background-color: white;
  border-radius: 100%;
  border: 2px solid #ccc1c1;
  cursor: pointer;
  z-index: 100;
  padding: 5px;

  ${media("<=phone")} {
    top: 10px;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  background-color: #ede6d8;
  margin: auto;
  position: relative;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #333; // Dark text color for better readability
  text-align: center; // Center the text
  font-weight: lighter;
  margin-top: 10px;
  h1 {
    font-size: 2em; // Make the name larger
    color: black; // Use a different color for the name
    font-weight: lighter;
    font-family: "Inter Tight", sans-serif;
  }

  p {
    color: beige;
    font-size: 1.2em;
    line-height: 1.4; /* Increase line height for better readability */
    max-width: 400px; /* Limit paragraph width for better text wrapping */
    margin: 0 auto; /* Center paragraphs horizontally */
    padding: 0 20px; /* Add some padding for visual appeal */
    /* Add a semi-transparent background */
    border-radius: 5px; /* Add rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    transition: transform 0.3s ease-in-out; /* Add smooth transition on hover */
    background-color: #d2c19d; /* Use a light background color */
    font-family: recoleta alt light;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    background-color: white;

    img {
        border-radius: 50%;
    }
}
`;
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  text-align: center;

  line-height: 1.5em;
  font-family: "Recoleta Alt Light";
  font-style: italic;
  font-size: 1.5em;
  color: #9f887e;

  p {
    margin: 0;
  }
`;
const Author = styled.span`
  margin-top: 5px;
  font-size: 0.9em;
  font-family: "Recoleta Alt Light";
  width: 100%;
  color: black;
`;
