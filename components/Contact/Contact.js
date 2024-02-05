import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";

export default function Contact() {
  return (
    <>
      <StyledContainer>
        <StyledInfo>
          <h2>Simona Jäkel</h2>
          <p>Telefon: +49 (0)177 2357658</p>
          <p>Email:simonajaekel@gmail.com</p>
          <h3>Adresse</h3>
          <p>Weichselpl. 4</p>
          <p>12045 Berlin-Neukölln</p>
        </StyledInfo>
        <StyledForm
          action="https://formsubmit.co/e3cd97bc2ac034008a8ceb35e12efc17"
          method="POST"
          id="form"
        >
          <StyledTitle>Formular</StyledTitle>
          {/* Honeypot that preevnts spammers from filling the form out */}
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false"></input>
          {/* redirecting */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/"
          ></input>

          <StyledLabel htmlFor="fname">Vorname </StyledLabel>
          <input type="text" name="Vorname" placeholder="Otto" required />
          <StyledLabel htmlFor="sname">Name </StyledLabel>
          <input type="text" name="Name" placeholder="Müller" required />
          <StyledLabel htmlFor="email">Email </StyledLabel>
          <input
            type="text"
            name="email"
            placeholder="example@domain.com"
            required
          />
          <StyledTextArea></StyledTextArea>

          <button type="submit">Senden</button>
        </StyledForm>
      </StyledContainer>
    </>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  input {
    width: 300px;
    height: 20px;
    padding: 10px;
  }
  button {
    width: 300px;
    height: 30px;
    background-color: #ede6d8;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #f4f1e9;
  }
  label {
    font-size: 1.2rem;
  }
  input {
    font-size: 1.2rem;
  }
  button {
    font-size: 1.2rem;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 500px;

  #contact {
    scroll-margin-top: 10px;
  }

  ${media("<=phone")} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledInfo = styled.div`
  margin-top: 70px;
  ${media("<=phone")} {
    text-align: center;
    margin-top: 12px;
  }
`;
const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin-right: 200px;
`;
const StyledTitle = styled.h2`
  text-align: center;
`;
const StyledTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;
