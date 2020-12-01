import React, { FormEvent, useState } from "react";
import styled from "styled-components";

import Spinner from "../../components/Spinner";

type FormProps = {
  formState: string;
  handleChangeFormState: () => void;
};

export default function Form({ formState, handleChangeFormState }: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendLoginInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const validateSignUp = () => {};

  const login = formState === "login";

  if (isLoading) return <Spinner />;

  return (
    <FormContainer onSubmit={login ? sendLoginInfo : registerUser}>
      {!login && (
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      )}
      <Input
        placeholder="E-mail"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        placeholder="Senha"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {!login && (
        <Input
          placeholder="Confirme a senha"
          type="password"
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
        />
      )}
      <Button disabled={isLoading} type="submit">
        {login ? "Entrar" : "Cadastrar"}
      </Button>
      <ChangeFormButton onClick={handleChangeFormState}>
        {login
          ? "Primeira vez? Cadastre-se!"
          : "Já tem uma conta? Entre agora!"}
      </ChangeFormButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 90%;
  margin-bottom: 15px;

  &::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  background: var(--lightPurple);
  color: white;
  width: 90%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  padding: 10px 0;
  margin-bottom: 25px;
`;

const ChangeFormButton = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
