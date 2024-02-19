import React from "react";
import { styled, css } from "styled-components";
import Image from "next/image";
import Navigation from "../components/Navigation/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <Container>
        <AboutMe>
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
          <Description>
            <h1>Simona Jäkel</h1>
            <p>Dipl. Bowen-Practitioner</p>
            <p>Gesundheitspraktikerin (BfG)</p>
            <p>Mutter von 3 Kindern</p>
          </Description>
          <Quote>
            <p>
              " Through hands we
              <br /> SERVE, through
              <br /> serving we LOVE
              <br /> through loving we
              <br /> CREATE "
            </p>
            <Author>- J. Norton</Author>
          </Quote>
        </AboutMe>
      </Container>
    </>
  );
}

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: #ede6d8;
  margin: 0px 0px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #333; // Dark text color for better readability
  text-align: center; // Center the text
  font-weight: lighter;
  h1 {
    font-size: 2em; // Make the name larger
    color: black; // Use a different color for the name
    font-weight: lighter;
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
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px;
  background-color: #ede6d8;
  margin: 0px 0px;
  width: calc(100% - 100px);
  padding-top: 122px;
`;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    background-color: #ede6d8;

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

  width: 100%;
  color: black;
`;
