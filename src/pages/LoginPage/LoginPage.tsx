import React from "react";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <MainContainer>
      <p>Hi</p>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
