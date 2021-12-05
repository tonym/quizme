import { Quiz, QuizQuestion } from '../../types';

const TripQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Jak se zeptat na cestu',
    questions: [
      {
        answer: ['far'],
        question: 'daleko'
      },
      {
        answer: ['approximately'],
        question: 'asi'
      },
      {
        answer: ['pharmacy', 'drugstore', 'drug store'],
        question: 'lékarna'
      },
      {
        answer: ['not at all'],
        question: 'vůbec ne'
      },
      {
        answer: ['right beside', 'right next to'],
        question: 'hned vedle'
      },
      {
        answer: ['all the time'],
        question: 'pořád'
      },
      {
        answer: ['an hour', 'hour'],
        question: 'hodina'
      },
      {
        answer: ['on foot'],
        question: 'pěšky'
      },
      {
        answer: ['to turn', 'turn'],
        question: 'zahnout'
      }
    ]
  }
];

export default TripQuiz;
