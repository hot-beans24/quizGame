import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { processQuestions } from "../data/processQuestions";

import axios from "axios";

type useQuestionsEffectProps = {
  category: {
    title: string;
    egTitle?: string;
    id: number;
    triviaId: number;
    icon: IconDefinition
  },
  difficulty: string;
  amount: number;
}

const useQuestionsEffect = async ({ category, difficulty, amount }: useQuestionsEffectProps) => {
  let url = `https://opentdb.com/api.php?amount=${amount}&`;
  if (difficulty !== "any") {
    url += `difficulty=${difficulty}&`;
  }
  if (category.triviaId !== 0) {
    url += `category=${category.triviaId}`;
  }
  const result = await (await axios.get(url)).data;
  const questions = result.results;
  
  return processQuestions(questions);
}

export { useQuestionsEffect };