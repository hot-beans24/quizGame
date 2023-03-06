import React from 'react';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faQ } from '@fortawesome/free-solid-svg-icons';

import Button from '../parts/Button';
import Category from '../parts/Category';
import QuizItems from '../parts/QuizItems';
import QuizInput from '../parts/QuizInput';
import QuizLabel from '../parts/QuizLabel';
import QuizLabels from '../parts/QuizLabels';

import { stylesVariables } from '../data/stylesVariables';

type QuestionsProps = {
  category: {
    title: string;
    egTitle?: string;
    id: number;
    triviaId: number;
    icon: IconDefinition
  },
  difficulty: string;
  amount: number;
  questions: any;
  correctAnswerIndexes: number[];
  isResults?: boolean;
}

const Questions = ({ category, difficulty, amount, questions, correctAnswerIndexes, isResults }: QuestionsProps) => {
  const [myAnswerIndexes, setMyAnswerIndexes] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const indexes = [];
    for(let i = 0 ; i < questions.length ; i++) {
      indexes[i] = 0;
    }
    setMyAnswerIndexes(indexes);
  }, [questions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const questionNumber = event.target.dataset.num || "0";
    const answerIndex = event.target.value;
    setMyAnswerIndexes(myAnswerIndexes.map((value, index) => index === parseInt(questionNumber) ? parseInt(answerIndex) : value));
  }

  const handleButtonClick = () => {
    navigate("/quiz/finish", { state: {
      category,
      questions,
      correctAnswerIndexes,
      myAnswerIndexes
    }})
  }

  return (
    <SDiv>
      <Category title={category.title} id={category.id} icon={category.icon} isNotToppage />
      {questions.map((quiz: any, index: number) => (
        <QuizItems key={index}>
          <SSpan>{index + 1}</SSpan>
          <SP>
            <FontAwesomeIcon icon={faQ} style={{ "marginRight": "4px", "color": stylesVariables.colors.accent, "fontSize": "24px" }} />
            {quiz.question}
          </SP>
          <QuizLabels>
            {quiz.answers.map((value: any, a: number) => (
              <QuizLabel key={a} title={value} isResult={isResults} isCorrect={a === correctAnswerIndexes[index]} isIncorrect={a === myAnswerIndexes[index]}>
                {!isResults && <QuizInput name={`quiz_${index}`} value={a} dataNumber={index} onChange={handleInputChange} checked={a === 0 && true} />}
              </QuizLabel>
            ))}
          </QuizLabels>
        </QuizItems>
      ))}
      {!isResults && <Button title="Finish" kind="main" onClick={handleButtonClick}></Button>}
    </SDiv>
  );
};

/* styledElements */

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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

const SP = styled.p`
  max-width: 700px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export default Questions;
