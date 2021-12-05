import { Quiz } from '../../types';
import NumbersQuiz from './numbers';
import PhrasesQuiz from './phrases';
import PrepositionsQuiz from './prepositions';
import QuestionWordsQuiz from './question_words';
import TripQuiz from './trip';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [...NumbersQuiz, ...PhrasesQuiz, ...PrepositionsQuiz, ...QuestionWordsQuiz, ...TripQuiz];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
