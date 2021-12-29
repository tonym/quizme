import { Quiz } from '../../types';

const DateAndTimeQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Dny v týdnu',
    questions: [
      {
        answer: ['sunday'],
        question: 'neděle'
      },
      {
        answer: ['monday'],
        question: 'pondělí'
      },
      {
        answer: ['tuesday'],
        question: 'úterý'
      },
      {
        answer: ['wednesday'],
        question: 'středa'
      },
      {
        answer: ['thursday'],
        question: 'čtvrtek'
      },
      {
        answer: ['friday'],
        question: 'pátek'
      },
      {
        answer: ['saturday'],
        question: 'sobota'
      }
    ]
  }
];

export default DateAndTimeQuiz;
