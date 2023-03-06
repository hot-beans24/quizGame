import React from 'react';

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Questions from '../templates/Questions';
import { processQuestions, ProcessedQuestionType } from '../data/processQuestions';
import sample  from "../data/sample.json";

const QuizPlay = () => {
  const [questions, setQuestions] = useState<ProcessedQuestionType[]>([]);
  const [correctAnswerIndexes, setCorrectAnswerIndexes] = useState<number[]>([]);
  const [myAnswerIndexes, setMyAnswerIndexes] = useState<number[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { category, difficulty, amount } = location.state !== null && location.state;

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
      return;
    }

    const fetchQuestions = async () => {
      let url = `https://opentdb.com/api.php?amount=${amount}&`;
      if (difficulty !== "any") {
        url += `difficulty=${difficulty}&`;
      }
      if (category.triviaId !== 0) {
        url += `category=${category.triviaId}`;
      }
      const result = await (await axios.get(url)).data;
      const questions = result.results;
      // const questions = sample.results;
      if(questions !== undefined) {
        const { processedQuestions, correctAnswerIndexes, myAnswerIndexes } = processQuestions(questions);
        setQuestions(processedQuestions);
        setCorrectAnswerIndexes(correctAnswerIndexes);
        setMyAnswerIndexes(myAnswerIndexes);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <Questions category={category} difficulty={difficulty} amount={amount} questions={questions} correctAnswerIndexes={correctAnswerIndexes} />
  );
};

export default QuizPlay;