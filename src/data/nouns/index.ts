import { Quiz } from '../../types';
import IdentifiersTranslationQuiz from './identifiers';
import GenitiveTranslationQuiz from './genitive';
import DativeTranslationQuiz from './dative';
import PrepositionCasesQuiz from './preposition_cases';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...DativeTranslationQuiz, ...GenitiveTranslationQuiz, ...IdentifiersTranslationQuiz, ...PrepositionCasesQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
