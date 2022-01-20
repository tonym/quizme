import { Quiz, QuizQuestion } from '../../types';

const AdverbsQuiz: Quiz[] = [
  {
    description: 'Jaké slovo říkám?',
    name: 'Příslovce',
    questions: [
      {
        answer: ['eventually', 'finally', 'in the end'],
        question: 'nakonec'
      },
      {
        answer: ['for the first time'],
        question: 'poprvé'
      },
      {
        answer: ['for the last time'],
        question: 'naposled'
      },
      {
        answer: ['last'],
        question: 'minulý'
      },
      {
        answer: ['late'],
        question: 'pozdě'
      },
      {
        answer: ['later'],
        question: 'později'
      },
      {
        answer: ['recently'],
        question: 'nedávno'
      },
      {
        answer: ['soon'],
        question: 'brzy'
      },
      {
        answer: ['early'],
        question: 'brzo'
      },
      {
        answer: ['firstly', 'the first'],
        question: 'nejdřív'
      },
      {
        answer: ['then', 'after'],
        question: 'pak'
      },
      {
        answer: ['after', 'then'],
        question: 'potom'
      },
      {
        answer: ['when'],
        question: 'kdy'
      },
      {
        answer: ['when if'],
        question: 'když'
      },
      {
        answer: ['yesterday'],
        question: 'včera'
      }
    ]
  }
];

export default AdverbsQuiz;
