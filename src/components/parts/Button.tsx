import React from 'react';

import styled from 'styled-components';

import { stylesVariables } from '../data/stylesVariables';

type ButtonProps = {
  title: string;
  kind: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, kind, onClick }: ButtonProps) => {
  return (
    <SButton kind={kind} onClick={onClick}>{title}</SButton>
  )
};

/* styledElements */

type SButtonProps = { kind: string };
const SButton = styled.button<SButtonProps>`
  padding: 10px 16px;
  border-radius: 4px;
  border: none;
  background-color:  ${({kind}) => stylesVariables.colors[kind]};
  color: ${stylesVariables.colors.textDark};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  transition: opacity 0.2s;
  will-change: opacity;
  
  &:hover {
    opacity: 0.6;
  }
  
  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export default Button;