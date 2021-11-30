import { Quiz, QuizQuestion } from '../../types';

const QuestionWordsQuiz: Quiz[] = [
  {
    description: 'Jaké slovo říkám?',
    name: 'Tázací slova - osoby, prostory, a věci',
    questions: [
      {
        answer: ['where'],
        question: 'kde'
      },
      {
        answer: ['which way'],
        question: 'kudy'
      },
      {
        answer: ['to which place', 'to where'],
        question: 'kam'
      },
      {
        answer: ['from where', 'where from'],
        question: 'odkud'
      },
      {
        answer: ['what kind of', 'what kind'],
        question: 'jaký'
      },
      {
        answer: ['who'],
        question: 'kdo'
      },
      {
        answer: ['who which'],
        question: 'který'
      },
      {
        answer: ['what'],
        question: 'co'
      }
    ]
  }
];

export default QuestionWordsQuiz;
