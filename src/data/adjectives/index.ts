import { Quiz } from '../../types';
import ClothingQuiz from './clothing';
import ColorsQuiz from './colors';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...ClothingQuiz, ...ColorsQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
