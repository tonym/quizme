import { Quiz } from '../../types';
import numbersQuiz from './numbers';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...numbersQuiz];

  return quizzes;
}
