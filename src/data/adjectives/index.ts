import { Quiz } from '../../types';
import ClothingQuiz from './clothing';
import ColorsQuiz from './colors';
import HairQuiz from './hair';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...ClothingQuiz, ...ColorsQuiz, ...HairQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
