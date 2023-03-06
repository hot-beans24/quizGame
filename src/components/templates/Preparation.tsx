import React from 'react';

import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import Button from '../parts/Button';
import Category from '../parts/Category';
import QuizItems from '../parts/QuizItems';
import QuizInput from '../parts/QuizInput';
import QuizLabel from '../parts/QuizLabel';
import QuizLabels from '../parts/QuizLabels';

import { quizDifficulties } from '../data/quizDifficulties';
import { quizAmounts } from '../data/quizAmounts';
import { useNavigate } from 'react-router-dom';

type PreparationProps = {
  counts: {
    total: number;
    totalEasy: number;
    totalMedium: number;
    totalHard: number;
  };
  category: {
    title: string;
    id: number;
    icon: IconDefinition
  }
}

const Preparation = ({ counts, category }: PreparationProps) => {
  const [difficulty, setDifficulty] = useState("any");
  const [amount, setAmount] = useState(5);
  const [totalQuestions, setTotalQuestions] = useState(counts.total);
  const [countAmounts, setCountAmounts] = useState(4);

  const navigate = useNavigate();

  useEffect(() => {
    if (difficulty === "any") {
      setTotalQuestions(counts.total);
    } else if (difficulty === "easy") {
      setTotalQuestions(counts.totalEasy);
    } else if (difficulty === "medium") {
      setTotalQuestions(counts.totalMedium);
    } else if (difficulty === "hard") {
      setTotalQuestions(counts.totalHard);
    }
  }, [counts, difficulty])

  useEffect(() => {
    if (20 <= totalQuestions) {
      setCountAmounts(4)
    } else if (15 <= totalQuestions) {
      setCountAmounts(3)
    } else if (10 <= totalQuestions) {
      setCountAmounts(2)
    } else {
      setCountAmounts(1);
    }
  }, [totalQuestions])

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty(event.target.value);
    const inputs = document.querySelectorAll("[name=amount]");
    inputs.forEach((input: any, index) => {
      input.checked = index === 0 ? true : false;
    })
    setAmount(5);
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  }

  const handleButtonClick = () => {
    navigate("/quiz/play", {
      state: {
        category,
        difficulty,
        amount
      }
    });
  }

  return (
    <SDiv>
      <Category title={category.title} id={category.id} icon={category.icon} isNotToppage />
      <QuizItems>
        <SH3>難易度</SH3>
        <QuizLabels>
          {quizDifficulties.map((difficulty, index) => (
            <QuizLabel key={index} title={difficulty.title}>
              <QuizInput name="difficulty" value={difficulty.value} checked={difficulty.checked} onChange={handleDifficultyChange} />
            </QuizLabel>
          ))}
        </QuizLabels>
      </QuizItems>
      <QuizItems>
        <SH3>問題数</SH3>
        <QuizLabels>
          {quizAmounts.map((amount, index) => index < countAmounts && (
            <QuizLabel key={index} title={amount.title}>
              <QuizInput name="amount" value={amount.value} checked={amount.checked} onChange={handleAmountChange} />
            </QuizLabel>
          ))}
        </QuizLabels>
      </QuizItems>
      <Button title="Start" kind="main" onClick={handleButtonClick}></Button>
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

const SH3 = styled.h3`
  font-size: 14px;
`;

export default Preparation;
