type QuizAmountType = {
  title: string;
  value: number,
  checked?: boolean
}

const quizAmounts: QuizAmountType[] = [
  {
    title: "5問",
    value: 5,
    checked: true
  },
  {
    title: "10問",
    value: 10
  },
  {
    title: "15問",
    value: 15
  },
  {
    title: "20問",
    value: 20
  }
];

export { quizAmounts };