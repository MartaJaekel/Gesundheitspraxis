import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
import { useState } from "react";

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(event.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        setShowConfirmation(true);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Form submission failed", error);
      });
  }
  function handleConfirmationClose() {
    setShowConfirmation(false);
  }

  return (
    <>
      <StyledContainer id="contact">
        <StyledForm
          action="https://formsubmit.co/info@holistictouch-jaekel.de"
          method="POST"
          id="form"
          onSubmit={handleSubmit}
        >
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="https://www.holistictouch-jaekel.de/#contact"
          ></input>

          <FormHeader>Kontakt</FormHeader>

          <InputWrapper>
            <StyledLabel htmlFor="fname">
              Vorname<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="fname" type="text" name="Vorname" required />
          </InputWrapper>

          <InputWrapper>
            <StyledLabel htmlFor="sname">
              Name<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="sname" type="text" name="Name" required />
          </InputWrapper>

          <InputWrapper>
            <StyledLabel htmlFor="email">
              E-Mail<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="email" type="email" name="email" required />
          </InputWrapper>

          <InputWrapper>
            <StyledLabel htmlFor="message">
              Nachricht<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledTextArea
              id="message"
              name="message"
              required
              aria-label="Message"
            ></StyledTextArea>
          </InputWrapper>

          <StyledButton type="submit">Senden</StyledButton>
        </StyledForm>
        {showConfirmation && (
          <StyledConfirmationModal>
            <StyledConfirmationContent>
              <StyledCloseButton
                className="close"
                onClick={handleConfirmationClose}
              >
                &times;
              </StyledCloseButton>
              <p> Ihre Nachricht wurde erfolgreich versendet!</p>
            </StyledConfirmationContent>
          </StyledConfirmationModal>
        )}

        <StyledInfo>
          <StyledSection>
            <ImageContainer>
              <StyledImage src="/beauty.png" alt="profile-picture" />
            </ImageContainer>
            <h2>Gesundheitspraxis</h2>
            <h3>Simona Jaekel</h3>

            <StyledDetails>
              <IconWrapper>
                <img src="/telephone.png" alt="phone" />
                <a href="tel:+49 (0) 15788297240">+49 (0) 15788297240</a>
              </IconWrapper>
              <IconWrapper>
                <img src="/email.png" alt="email" />
                <p>info@gesundheitspraxis-jaekel.de</p>
              </IconWrapper>
              <IconWrapper>
                <img src="/location.png" alt="location" />
                <p>Weichselplatz 4 - 12045 Berlin</p>
              </IconWrapper>
            </StyledDetails>
          </StyledSection>

          <StyledMap>
            <StyledFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.2126612823455!2d13.438750715891967!3d52.48724006029397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f059d8c8f17%3A0x32b463fde3c289c7!2sGesundheitspraxis%20Simona%20Jaekel!5e0!3m2!1sit!2sde!4v1721932168470!5m2!1sit!2sde"
              loading="lazy"
              title="Map showing the location of Gesundheitspraxis Simona Jäkel"
            ></StyledFrame>
          </StyledMap>
        </StyledInfo>
      </StyledContainer>
    </>
  );
}
const RequiredAsterisk = styled.span`
  color: red;
  margin-left: 2px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 100px;
  background: #fbfbfb;
  gap: 80px;
  flex-wrap: wrap;
  ${media("<=desktop")} {
    flex-direction: column;
    padding: 20px;
    gap: 40px;
  }
`;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  border-radius: 15px;
`;

const FormHeader = styled.h1`
  color: #6e6969;
  font-family: "Inter Tight", sans-serif;
  font-size: 36px;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: #a1a1a1;
`;

const StyledInput = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #efebeb;
  border-radius: 10px;

  &:focus {
    border-color: #e1d9d0;
    outline: none;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #efebeb;
  border-radius: 10px;
  resize: none;
  height: 120px;

  &:focus {
    border-color: #e1d9d0;
    outline: none;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`;

const StyledButton = styled.button`
  padding: 15px;
  font-size: 18px;
  background-color: #d2c4b5;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    font-size 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #d2c4b5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 20px;
  }
`;

const StyledConfirmationModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledConfirmationContent = styled.div`
  background-color: #fefaf7;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`;

const StyledCloseButton = styled.span`
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const StyledInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const StyledSection = styled.section`
  text-align: center;
  h2 {
    font-family: "Inter Tight", sans-serif;
    font-size: xx-large;
    color: #6e6969;
    font-weight: 100;
  }

  h3 {
    font-family: "Inter Tight", sans-serif;
    font-size: x-large;
    color: #6e6969;
    font-weight: 100;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 110px;
  width: 110px;
  object-fit: cover;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 25px;
    width: 25px;
  }

  p,
  a {
    font-size: 19px;
    color: #6e6969;
  }

  a {
    text-decoration: none;
    color: #6e6969;
    font-size: 20px;
    &:hover {
      color: #b08c6c;
    }
  }
`;

const StyledMap = styled.div`
  width: 100%;
  height: 300px;
`;

const StyledFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;
