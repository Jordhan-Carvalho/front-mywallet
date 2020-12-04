import React, { ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number | undefined;
  placeholder: string;
  [x: string]: any;
};

export default function Input({
  onChange,
  type,
  value,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <InputContainer
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
}

const InputContainer = styled.input`
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
