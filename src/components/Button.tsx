import React from "react";
import styled from "styled-components";

type ButtonType = {
  children: string;
  [x: string]: any;
};

export default function Button({ children, ...rest }: ButtonType) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}

const ButtonContainer = styled.button`
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
