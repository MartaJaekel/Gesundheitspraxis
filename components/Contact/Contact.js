import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";

export default function Contact() {
  return (
    <>
      <StyledContainer>
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
          <input
            type="text"
            name="Vorname"
            placeholder="Dein Vorname"
            required
          />
          <StyledLabel htmlFor="sname">Name </StyledLabel>
          <input type="text" name="Name" placeholder="Dein Name" required />
          <StyledLabel htmlFor="email">Email </StyledLabel>
          <input type="text" name="email" placeholder="Deine Email" required />
          <StyledTextArea name="message"></StyledTextArea>

          <StyledButton type="submit">Senden</StyledButton>
        </StyledForm>
        <StyledInfo>
          <div>
            <h2>Simona Jäkel</h2>
            <a href="tel:6031112298p000">+49 (0) 15788297240</a>
            <p>info@bowen-praxis.de</p>
            <h3>Adresse</h3>
            <p>Weichselpl. 4</p>
            <p>12045 Berlin</p>
          </div>
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  // margin-top: 50px;
  // margin-bottom: 50px;
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
  h2 {
    font-weight: lighter;
  }

  ${media("<=desktop")} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin-right: 200px;

  ${media("<=phone")} {
    margin: 0px;
  }
`;
const StyledTitle = styled.h2`
  text-align: center;
  font-weight: lighter;
`;
const StyledTextArea = styled.textarea`
  width: calc(100% - 20px);
  height: 100px;
  padding: 10px;
  font-size: 0.9rem;
  margin-top: 20px;
  margin-bottom: 20px;
  resize: none;
`;
const StyledMap = styled.div`
  width: 100%;

  ${media("<=phone")} {
    display: flex;
    justify-content: center;
    width: 80%;

    margin-top: 40px;
  }
  ${media("<=desktop")} {
    width: 50%;
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
`;
const StyledFrame = styled.iframe`
  border-style: none;
`;
