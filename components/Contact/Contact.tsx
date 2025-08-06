import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgvwgbjl");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowConfirmation(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  function handleConfirmationClose() {
    setShowConfirmation(false);
  }

  return (
    <>
      <StyledContainer id="contact">
        <StyledForm id="form" onSubmit={handleSubmit} ref={formRef}>
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="https://www.holistictouch-jaekel/#contact"
          ></input>

          <FormHeader>Kontakt</FormHeader>

          <InputWrapper>
            <StyledLabel htmlFor="fname">
              Vorname<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="fname" type="text" name="Vorname" required />
            <ValidationError
              prefix="Vorname"
              field="Vorname"
              errors={state.errors}
            />
          </InputWrapper>

          <InputWrapper>
            <StyledLabel htmlFor="sname">
              Nachname<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="sname" type="text" name="Name" required />
            <ValidationError prefix="Name" field="Name" errors={state.errors} />
          </InputWrapper>

          <InputWrapper>
            <StyledLabel htmlFor="email">
              E-Mail<RequiredAsterisk>*</RequiredAsterisk>
            </StyledLabel>
            <StyledInput id="email" type="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </InputWrapper>

          <StyledButton type="submit" disabled={state.submitting}>
            Senden
          </StyledButton>
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
            <div>
              <ImageContainer>
                <StyledImage src="/beauty.png" alt="profile-picture" />
              </ImageContainer>
            </div>
            <Info>
              <h2>Holistic Touch Simona Jäkel</h2>

              <StyledDetails>
                <IconWrapper>
                  <img src="/telephone.png" alt="phone" />
                  <a href="tel:+49 (0) 15788297240">+49 (0) 15788297240</a>
                </IconWrapper>
                <IconWrapper>
                  <img src="/email.png" alt="email" />
                  <p>info@holistictouch-jaekel.de </p>
                </IconWrapper>
                <IconWrapper>
                  <img src="/location.png" alt="location" />
                  <p>Weichselplatz 4 - 12045 Berlin</p>
                </IconWrapper>
                 <IconWrapper>
                  <img src="/location.png" alt="location" />
                  <p> Brunnenstraße 147 - 10115 Berlin </p>
                </IconWrapper>
              </StyledDetails>
            </Info>
          </StyledSection>

          <StyledMap>
            <StyledFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1366.8341437444726!2d13.438556141852365!3d52.48727449331691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f059d8c8f17%3A0x32b463fde3c289c7!2sHolistic%20Touch%20Simona%20J%C3%A4kel!5e0!3m2!1sde!2sde!4v1729531052888!5m2!1sde!2sde"
              width="600"
              height="450"
              loading="lazy"
              title="Map showing the location of Gesundheitspraxis Simona Jäkel"
            ></StyledFrame>
          </StyledMap>
        </StyledInfo>
      </StyledContainer>
    </>
  );
}
const Info = styled.div`
  display: flex;
  flex-direction: column;
  ${media("<=desktop")} {
    align-items: center;
  }
`;
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
  background: #f9f5f1;
  gap: 80px;
  align-items: flex-end;
  flex-wrap: wrap;
  ${media("<=desktop")} {
    flex-direction: column;
    padding: 20px;
    gap: 40px;
    align-items: normal;
  }
`;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  display: flex;
  gap: 50px;
  text-align: center;
  h2 {
    font-family: "Inter Tight", sans-serif;
    font-size: xx-large;
    color: #6e6969;
    font-weight: 400;
  }

  h3 {
    font-family: "Inter Tight", sans-serif;
    font-size: x-large;
    color: #6e6969;
    font-weight: 100;
  }
  ${media("<=desktop")} {
    flex-direction: column;
    align-items: center;
  }
  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
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
