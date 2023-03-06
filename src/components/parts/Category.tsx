import React from 'react'

import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


type CategoryProps = {
  title: string;
  id: number;
  icon: IconDefinition;
  isNotToppage?: boolean;
}

const Category = ({ title, id, icon, isNotToppage }: CategoryProps) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    if (isNotToppage) return;
    navigate(`quiz/prepare/${id}`);
  }

  return (
    <SDiv id={id} isNotToppage={isNotToppage} onClick={handleCategoryClick}>
      <FontAwesomeIcon style={{ "color": "#ffd803", "fontSize": "20px" }} icon={icon} />
      <span>{title}</span>
    </SDiv>
  );
};

/* styledElements */

const CategoryAnimate = keyframes`
  0% {
    opacity: 0;
    translate: 0 20px;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    translate: 0 0;
    visibility: visible;
  }
`;

type SDivProps = { id: any, isNotToppage?: boolean };
const SDiv = styled.div<SDivProps>`
  padding: 26px 38px;
  border: 3px solid transparent;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: border 0.2s, box-shadow 0.2s;
  will-change: translate;
  cursor: pointer;
  
  &:hover {
    color: #ffd803;
    border: 3px solid #ffd803;
    box-shadow: none;
  }

  animation-name: ${CategoryAnimate};
  animation-duration: 0.6s;
  animation-delay: calc(0.4s + (0.1 * ${({ id }) => id}s));
  animation-fill-mode: both;

  ${({isNotToppage}) => isNotToppage && css`
    scale: 0.9;
    animation: none;
    cursor: initial;
    pointer-events: none;
  `};
`;

export default Category;