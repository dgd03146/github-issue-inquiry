import React from "react";
import { ButtonWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
