type QuizDifficultyType = {
  title: string;
  value: string;
  checked?: boolean;
}

const quizDifficulties: QuizDifficultyType[] = [
  {
    title: "ランダム",
    value: "any",
    checked: true
  },
  {
    title: "簡単",
    value: "easy"
  },
  {
    title: "普通",
    value: "medium"
  },
  {
    title: "難しい",
    value: "hard"
  }
];

export { quizDifficulties };