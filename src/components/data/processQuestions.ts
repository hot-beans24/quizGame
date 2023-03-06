type OriginalQuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type ProcessedQuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

const processQuestions = (originalQuestions: OriginalQuestionType[]) => {
  const processedQuestions: ProcessedQuestionType[] = [];
  const correctAnswerIndexes: number[] = [];
  const myAnswerIndexes: number[] = []

  originalQuestions.forEach((quiz, index) => {
    const processedQuestion: ProcessedQuestionType = {
      category: quiz.category,
      type: quiz.type,
      difficulty: quiz.difficulty,
      question: quiz.question,
      answers: [],
      correctAnswerIndex: 0
    };
    myAnswerIndexes.push(0);
    let answers: string[] = [];
    if (quiz.type === "multiple") {
      answers = [...quiz.incorrect_answers];
      let randIndex = Math.floor(Math.random() * 4); // 0~3
      answers.splice(randIndex, 0, quiz.correct_answer);
      processedQuestion.correctAnswerIndex = randIndex;
      correctAnswerIndexes[index] = processedQuestion.correctAnswerIndex;
    } else if (quiz.type === "boolean") {
      answers = ["True", "False"];
      processedQuestion.correctAnswerIndex = quiz.correct_answer === "True" ? 0 : 1;
      correctAnswerIndexes[index] = processedQuestion.correctAnswerIndex;
    }

    processedQuestion.answers = answers;
    processedQuestions.push(processedQuestion);
  })

  return { processedQuestions, correctAnswerIndexes, myAnswerIndexes };
}

export { processQuestions };