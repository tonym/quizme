import { Quiz } from '../../types';
import BuildQuiz from './build';
import ClothingQuiz from './clothing';
import ColorsQuiz from './colors';
import HairQuiz from './hair';
import JobsQuiz from './jobs';
import StyleQuiz from './style';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...BuildQuiz, ...ClothingQuiz, ...ColorsQuiz, ...HairQuiz, ...JobsQuiz, ...StyleQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
