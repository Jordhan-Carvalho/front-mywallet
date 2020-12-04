import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import Header from "./Header";
import { userContext } from "../../contexts/UserContext";

export default function DashboardPage() {
  const { user }: any = useContext(userContext);
  useEffect(() => {}, []);

  // function currencyFormat(moneyValue: number) {
  //   return (
  //     "$" +
  //     num
  //       .toFixed(2)
  //       .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  //   );
  // }

  return (
    <MainContainer>
      <Header userName={user.name} />
      <MainInfo></MainInfo>
      <Footer>
        <InputBox to={{ pathname: "/input", state: "entrada" }}>
          <IconPlus />
          <p>
            Nova <br /> entrada
          </p>
        </InputBox>
        <InputBox to={{ pathname: "/input", state: "saida" }}>
          <IconMinus />
          <p>
            Nova <br />
            saída
          </p>
        </InputBox>
      </Footer>
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
  padding: 20px;
`;

const MainInfo = styled.main`
  flex-grow: 1;
  background: white;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const Footer = styled.footer`
  height: 115px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputBox = styled(Link)`
  height: 100%;
  width: 47%;
  background: var(--lightPurple);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: bold;
  }
`;

const IconPlus = styled(AiOutlinePlusCircle)`
  font-size: 21px;
`;

const IconMinus = styled(AiOutlineMinusCircle)`
  font-size: 21px;
`;
