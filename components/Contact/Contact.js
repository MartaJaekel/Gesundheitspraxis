import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <StyledContainer id="contact">
        <StyledForm
          action="https://formsubmit.co/bccef37a920cca07b4c018121eb17f7f"
          method="POST"
          id="form"
        >
          {/* Honeypot that preevnts spammers from filling the form out */}
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false"></input>
          {/* redirecting */}
          <input
            type="hidden"
            name="_next"
            value="https://gesundheitspraxis-jaekel.de"
          ></input>

          <StyledLabel htmlFor="fname">Vorname </StyledLabel>
          <input type="text" name="Vorname" />
          <StyledLabel htmlFor="sname">Name </StyledLabel>
          <input type="text" name="Name" />
          <StyledLabel htmlFor="email">E-Mail </StyledLabel>
          <input type="text" name="email" required />
          <StyledLabel htmlFor="Nachricht">Nachricht</StyledLabel>
          <StyledTextArea name="message" required></StyledTextArea>

          <StyledButton type="submit">Senden</StyledButton>
        </StyledForm>
        <StyledInfo>
          <StyledSection>
            <StyledImage src="/profiletwo.jpeg" height={110} width={110} />
            <StyledDeatails>
              <IconWrapper>
                <img src="/home.png" alt="home" height={18} width={18} />

                <p>Gesundheitspraxis Simona Jäkel</p>
              </IconWrapper>
              <IconWrapper>
                <img src="/telephone.png" alt="home" height={18} width={18} />
                <a href="+49 (0) 15788297240"> +49 (0) 15788297240</a>
              </IconWrapper>
              <IconWrapper>
                <img src="/email.png" alt="home" height={20} width={20} />
                <p>info@gesundheitspraxis-jaekel.de</p>
              </IconWrapper>
              <IconWrapper>
                <img src="/location.png" alt="home" height={20} width={20} />
                <p>Weichselplatz 4 - 12045 Berlin</p>
              </IconWrapper>
            </StyledDeatails>
          </StyledSection>
          <StyledMap>
            <StyledFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5572798608396!2d13.4392619!3d52.4871512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fafca314ff5%3A0xdc6795d0065c3bc9!2sWeichselpl.%204%2C%2012045%20Berlin!5e0!3m2!1sit!2sde!4v1707649157027!5m2!1sit!2sde"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></StyledFrame>
          </StyledMap>
        </StyledInfo>
      </StyledContainer>
    </>
  );
}
const StyledDeatails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 15px;
  p {
    margin: 3px 10px;
    display: flex;
    font-size: 0.9rem;
    color: #9e8d8d;

    font-family: "Inter Tight", sans-serif;
    font-weight: lighter;
  }
  a {
    margin: 5px 10px;
    color: #9e8d8d;
    font-size: 0.9rem;
  }
  ${media("<=phone")} {
    margin: 10px 0px 10px 20px;
  }
  ${media("<=tablet")} {
    margin-top: 10px;
  }
`;

// Define a styled component for your SVG icon wrapper
const IconWrapper = styled.div`
  margin-right: 10px; /* Adjust margin as needed */
  display: flex;
  felx-direction: row;
  img {
    align-self: center;
    margin-right: 5px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media("<=phone")} {
    flex-direction: column;
    gap: 25px;
  }
  ${media("<=tablet")} {
    flex-direction: column;
    justify-content: center;
    margin: 10px;
  }
  // ${media("<=desktop")} {
  //   flex-direction: row;
  //   justify-content: center;
  //   margin: 10px;
  //   align-items: flex-start;
  // }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  border: 1.6px solid #523816;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  width: 50%;
  input {
    width: calc(100% - 20px);
    padding: 10px;
  }
  // ${media("<=phone")} {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   width: 100%;
  //   justify-content: space-evenly;
  //   margin-top: 0px;
  // }
  ${media("<=desktop")} {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // padding: 100px;
  gap: 100px;
  margin: 0 100px;
  margin-bottom: 50px;
  width: calc(100% - 200px);
  scroll-margin-top: 150px;

  ${media("<=desktop")} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  ${media("<=tablet")} {
    margin: 0 20px;
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }
`;
const StyledInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-end;
  margin-top: 50px;
  gap: 50px;

  h2 {
    font-weight: lighter;
  }

  ${media("<=desktop")} {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin-right: 200px;
  color: #9e8d8d;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;

  ${media("<=phone")} {
    margin: 0px;
  }
`;
const StyledTitle = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  font-family: "Inter Tight", sans-serif;
  font-weight: lighter;
`;
const StyledTextArea = styled.textarea`
  width: calc(100% - 20px);
  height: 100px;
  padding: 10px;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 20px;
  resize: none;
`;
const StyledMap = styled.div`
  width: 100%;

  ${media("<=phone")} {
    display: flex;
    justify-content: center;
    width: 80%;
  }
  ${media("<=desktop")} {
    width: 100%;
  }
  ${media("<=tablet")} {
    width: 100%;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ede6d8;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
`;
const StyledFrame = styled.iframe`
  border-style: none;
`;
