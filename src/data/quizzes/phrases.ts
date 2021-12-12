import { Quiz, QuizQuestion } from '../../types';

const PhrasesQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Gramatika',
    questions: [
      {
        answer: ['how long'],
        question: 'jak dlouho'
      }
      {
        answer: ['I went'],
        question: 'šel jsem'
      },
      {
        answer: ['I saw'],
        question: 'viděl jsem'
      },
      {
        answer: ['it was'],
        question: 'to bylo'
      },
      {
        answer: ['see you'],
        question: 'Uvidíme se'
      },
      {
        answer: ["I don't know"],
        question: 'nevím'
      },
      {
        answer: ['I learned'],
        question: 'naučil jsem se'
      },
      {
        answer: ['later'],
        question: 'později'
      },
      {
        answer: ['I have to', 'I must'],
        question: 'musím'
      },
      {
        answer: ['for'],
        question: 'pro'
      }
    ]
  }
];

export default PhrasesQuiz;
