import React from 'react';

import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import { stylesVariables } from '../data/stylesVariables';

type TrueFalseProps = {
  correct: boolean;
  questionNumber: number;
}

const TrueFalse = ({ correct, questionNumber }: TrueFalseProps) => {
  return (
    <SDiv num={questionNumber}>
      <SSpan>{questionNumber}</SSpan>
      <FontAwesomeIcon icon={correct ? faCircle : faX} style={{ "fontSize": "24px", "color": correct ? stylesVariables.colors.textDark : stylesVariables.colors.accent }} />
    </SDiv>
  );
};

/* styledElements */

const SDivAnimate = keyframes`
  0% {
    opacity: 0;
    translate: 0 10px;
  }
  100% {
    opacity: 1;
    translate: 0 0;
  }
`;

type SDivProps = { num: number };
const SDiv = styled.div<SDivProps>`
  padding: 16px 26px;
  border: 3px solid transparent;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  animation-name: ${SDivAnimate};
  animation-duration: 1s;
  animation-delay: calc(0.4s + ${({num}) => num} * 0.2s);
  animation-fill-mode: both;
`;

const SSpan = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${stylesVariables.colors.main};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export default TrueFalse;
