import { Quiz } from '../../types';
import AdverbsQuiz from './adverbs';
import AdverbsOfTimeQuiz from './adverbs_of_time';
import DateAndTimeQuiz from './date_and_time';
import HobbiesQuiz from './hobbies';
import MyDayQuiz from './myday';
import NumbersQuiz from './numbers';
import PlacesQuiz from './places';
import PrepositionsQuiz from './prepositions';
import QuestionWordsQuiz from './question_words';
import TripQuiz from './trip';

export const quizzes: Quiz[] = prepareQuizzes();

function prepareQuizzes(): Quiz[] {
  const quizzes: Quiz[] = [
    ...AdverbsQuiz,
    ...AdverbsOfTimeQuiz,
    ...DateAndTimeQuiz,
    ...HobbiesQuiz,
    ...MyDayQuiz,
    ...NumbersQuiz,
    ...PlacesQuiz,
    ...PrepositionsQuiz,
    ...QuestionWordsQuiz,
    ...TripQuiz
  ];

  return quizzes.sort((a, b) => a.name.localeCompare(b.name, 'cs'));
}
