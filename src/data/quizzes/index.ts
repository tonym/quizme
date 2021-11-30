import { Quiz } from '../../types';
import NumbersQuiz from './numbers';
import PhrasesQuiz from './phrases';
import PrepositionsQuiz from './prepositions';
import QuestionWordsQuiz from './question_words';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...NumbersQuiz, ...PhrasesQuiz, ...PrepositionsQuiz, ...QuestionWordsQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
