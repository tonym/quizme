import { Quiz } from '../../types';
import DateAndTimeQuiz from './date_and_time';
import KarelQuiz from './karel';
import NumbersQuiz from './numbers';
import PhrasesQuiz from './phrases';
import PlacesQuiz from './places';
import PrepositionsQuiz from './prepositions';
import QuestionWordsQuiz from './question_words';
import TripQuiz from './trip';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [
    ...DateAndTimeQuiz,
    ...KarelQuiz,
    ...NumbersQuiz,
    ...PhrasesQuiz,
    ...PlacesQuiz,
    ...PrepositionsQuiz,
    ...QuestionWordsQuiz,
    ...TripQuiz
  ];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
