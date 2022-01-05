import { Quiz } from '../../types';
import IdentifiersTranslationQuiz from './identifiers';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...IdentifiersTranslationQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
