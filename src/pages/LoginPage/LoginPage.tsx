import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

export default function LoginPage() {
  const [formState, setFormState] = useState("login");

  const handleChangeFormState = () => {
    formState === "login" ? setFormState("signup") : setFormState("login");
  };

  return (
    <MainContainer>
      <Title>MyWallet</Title>
      <Form
        formState={formState}
        handleChangeFormState={handleChangeFormState}
      />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: var(--titleFont);
  margin-bottom: 25px;
`;
