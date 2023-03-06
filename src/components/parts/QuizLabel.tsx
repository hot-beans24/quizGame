import React from 'react';

import styled, { css, keyframes } from 'styled-components';

import { stylesVariables } from '../data/stylesVariables';

type QuizLabelProps = {
  title: string;
  isResult?: boolean;
  isCorrect?: boolean;
  isIncorrect? :boolean;
  children?: React.ReactNode;
}

const QuizLabel = ({ title, isResult, isCorrect, isIncorrect, children }: QuizLabelProps ) => {
  return (
    <SLabel isResult={isResult} isCorrect={isCorrect} isIncorrect={isIncorrect}>
      {children}
      <SSpan>{title}</SSpan>
    </SLabel>
  );
};

/* styledElements */

const SLabelIncorrectAnimate = keyframes`
  0% {
    border: 3px solid ${stylesVariables.colors.accent};
    opacity: 0;
  }
  100% {
    border: 3px solid ${stylesVariables.colors.accent};
    opacity: 1;
  }
`;

const SLabelCorrectAnimate = keyframes`
  0% {
    border: 3px solid ${stylesVariables.colors.sub};
    opacity: 0;
  }
  100% {
    border: 3px solid ${stylesVariables.colors.sub};
    opacity: 1;
  }
`;

type SLabelType = { isResult?: boolean, isCorrect?: boolean, isIncorrect?: boolean };
const SLabel = styled.label<SLabelType>`
  padding: 16px 26px;
  border: 3px solid transparent;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: border 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    color: #ffd803;
    border: 3px solid #ffd803;
    box-shadow: none;
  }

  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  ${({isResult}) => isResult && css`
    cursor: initial;
    pointer-events: none;
    animation-name: ${({isIncorrect}: any) => isIncorrect && SLabelIncorrectAnimate};
    animation-name: ${({isCorrect}: any) => isCorrect && SLabelCorrectAnimate};
  `};

  ${({isResult, isIncorrect}) => isResult && isIncorrect && css`
    color: ${stylesVariables.colors.accent};
    box-shadow: none;
  `}

  ${({isResult, isCorrect}) => isResult && isCorrect && css`
    color: ${stylesVariables.colors.sub};
    box-shadow: none;
  `}
`;

const SSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export default QuizLabel;
