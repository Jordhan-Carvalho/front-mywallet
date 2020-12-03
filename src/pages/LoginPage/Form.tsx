import React, { FormEvent, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import Spinner from "../../components/Spinner";
import { validateSignup, validateSignin } from "../../utils/validation";
import { userContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

type FormProps = {
  formState: string;
  handleChangeFormState: () => void;
};

export default function Form({ formState, handleChangeFormState }: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { setUser }: any = useContext(userContext);

  const sendLoginInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      validateSignin(email, password);
      const { data } = await axios.post(
        "http://localhost:3000/api/users/sign-in",
        {
          email,
          password,
        }
      );
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        token: data.token,
      });
      setIsLoading(false);
      history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      validateSignup(newUser);
      await axios.post("http://localhost:3000/api/users/sign-up", newUser);
      handleChangeFormState();
    } catch (e) {
      alert(e.message);
    }
    setIsLoading(false);
  };

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
          value={confirmPassword}
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
