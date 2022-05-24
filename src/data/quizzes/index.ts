import { Quiz } from '../../types';
import AdverbsQuiz from './adverbs';
import DateAndTimeQuiz from './date_and_time';
import HobbiesQuiz from './hobbies';
import NumbersQuiz from './numbers';
import PlacesQuiz from './places';
import PrepositionsQuiz from './prepositions';
import QuestionWordsQuiz from './question_words';
import TripQuiz from './trip';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [
    ...AdverbsQuiz,
    ...DateAndTimeQuiz,
    ...HobbiesQuiz,
    ...NumbersQuiz,
    ...PlacesQuiz,
    ...PrepositionsQuiz,
    ...QuestionWordsQuiz,
    ...TripQuiz
  ];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
