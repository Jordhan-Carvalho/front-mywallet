import React from "react";
import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";

type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  return (
    <HeaderContainer>
      <Title>Olá, {userName}</Title>
      <IconLogout />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
`;

const IconLogout = styled(RiLogoutBoxRLine)`
  font-size: 26px;
`;
