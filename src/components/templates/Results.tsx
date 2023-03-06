import React from 'react';

import { useState } from "react";
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import TrueFalse from '../parts/TrueFalse';
import Questions from './Questions';

import { stylesVariables } from '../data/stylesVariables';
import Button from '../parts/Button';

type ResultsProps = {
  category: {
    title: string;
    egTitle?: string;
    id: number;
    triviaId: number;
    icon: IconDefinition
  },
  questions: any;
  correctAnswerIndexes: number[];
  myAnswerIndexes: number[];
}

const Results = ({ category, questions, correctAnswerIndexes, myAnswerIndexes }: ResultsProps) => {
  const [isShowQuestions, setIsShowQuestions] = useState(false);

  const handleOpenButtonClick = () => {
    setIsShowQuestions(true);
  }

  const handleCloseButtonClick = () => {
    setIsShowQuestions(false);
  }

  const handleDiv3Click = () => {
    setIsShowQuestions(false);
  }
  return (
    <>
      <h2>結果</h2>
      <SDiv>
        {correctAnswerIndexes.map((value, index) => (
          <TrueFalse key={index} questionNumber={index + 1} correct={correctAnswerIndexes[index] === myAnswerIndexes[index]} />
        ))}
      </SDiv>
      <Button title="問題を見る" kind='gray' onClick={handleOpenButtonClick} />
      {isShowQuestions &&
        <>
          <SDiv3 onClick={handleDiv3Click} />
          <SDiv2>
            <SSpan><Button title="閉じる" kind="gray" onClick={handleCloseButtonClick} /></SSpan>
            <Questions category={category} difficulty={''} amount={0} questions={questions} correctAnswerIndexes={correctAnswerIndexes} isResults />
          </SDiv2>
        </>
      }
    </>
  );
  ;
}

/* styledElements */

const SDiv = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SDiv2 = styled.div`
  height: 80%;
  max-width: 800px;
  padding: 30px;
  border: 30px solid ${stylesVariables.colors.background};
  border-radius: 40px;
  background-color: ${stylesVariables.colors.background};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  position: fixed;
  inset: 0;
  margin: auto;
  overflow-y: scroll;
  z-index: 3000;
`;

const SDiv3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  inset: 0;
  margin: 0;
  z-index: 2500;
`;

const SSpan = styled.span`
  position: fixed;
  margin-top: -30px;
  margin-left: -30px;
`;

export default Results;