import { Quiz, QuizQuestion } from '../../types';

const FoodQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Druhy jidla',
    questions: [
      {
        answer: ['soup'],
        question: 'polévka'
      },
      {
        answer: ['side dish'],
        question: 'příloha'
      },
      {
        answer: ['meat'],
        question: 'maso'
      },
      {
        answer: ['main dish'],
        question: 'hlavní jídlo'
      },
      {
        answer: ['snack'],
        question: 'občerstvení'
      },
      {
        answer: ['drinks'],
        question: 'nápoje'
      }
    ]
  }
];

export default FoodQuiz;
