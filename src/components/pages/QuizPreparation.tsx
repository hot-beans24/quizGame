import React from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Preparation from '../templates/Preparation';

import { categories } from '../data/categories';

const QuizPreparation = () => {
  const [counts, setCounts] = useState({ total: 100, totalEasy: 100, totalMedium: 100, totalHard: 100 });

  const params: any = useParams();
  const category = categories[params.categoryId];

  useEffect(() => {
    const fetchQuestionsCount = async () => {
      const result = await (await axios.get(`https://opentdb.com/api_count.php?category=${category.triviaId}`)).data;
      const categoryQuestionCount = result.category_question_count;
      if(categoryQuestionCount !== undefined) {
        setCounts({
          total: categoryQuestionCount.total_question_count,
          totalEasy: categoryQuestionCount.total_easy_question_count,
          totalMedium: categoryQuestionCount.total_medium_question_count,
          totalHard: categoryQuestionCount.total_hard_question_count
        });
      }
    }

    fetchQuestionsCount();
  },[]);

  return (
    <Preparation counts={counts} category={category} />
  );
};

export default QuizPreparation;
