import React, { useState, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";
import Input from "../components/Input";

export default function InputPage() {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();

  const sendExpense = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !description) return;
    console.log(value);
    console.log(description);
  };

  const sendIncome = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !description) return;
    console.log(value);
    console.log(description);
  };

  return (
    <MainContainer>
      <Title>Nova {state}</Title>
      <FormContainer onSubmit={state === "entrada" ? sendExpense : sendIncome}>
        <Input
          placeholder="Valor"
          type="number"
          // @ts-ignore
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
        <Input
          placeholder="Descrição"
          type="text"
          onChange={(e) => setDescription(e.currentTarget.value)}
          value={description}
        />
        <Button disabled={isLoading} type="submit">
          {`Salvar ${state}`}
        </Button>
      </FormContainer>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 40px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
