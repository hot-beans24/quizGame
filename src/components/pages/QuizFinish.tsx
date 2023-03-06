import React from 'react';

import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Results from '../templates/Results';

const QuizFinish = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state)

  const {category, questions, correctAnswerIndexes, myAnswerIndexes} = location.state;

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <Results category={category} questions={questions} correctAnswerIndexes={correctAnswerIndexes} myAnswerIndexes={myAnswerIndexes} />
  );
};

export default QuizFinish;