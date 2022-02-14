import { Quiz } from '../../types';

const BuildQuiz: Quiz[] = [
  {
    description: 'Jak to popisujeme?',
    name: 'Popis postava',
    questions: [
      {
        answer: ['young'],
        question: 'mladý'
      },
      {
        answer: ['middle age'],
        question: 'středního věku'
      },
      {
        answer: ['old'],
        question: 'starý'
      },
      {
        answer: ['athletic'],
        question: 'sportovní postavy'
      },
      {
        answer: ['well built'],
        question: 'dobře stavěný'
      },
      {
        answer: ['slim'],
        question: 'štíhlý'
      },
      {
        answer: ['thick'],
        question: 'tlustý'
      },
      {
        answer: ['full figure'],
        question: 'plné postavy'
      },
      {
        answer: ['skinny', 'thin'],
        question: 'hubený'
      },
      {
        answer: ['tall'],
        question: 'vysoký'
      },
      {
        answer: ['medium height'],
        question: 'středně vysoký'
      },
      {
        answer: ['short'],
        question: 'malý'
      }
    ]
  }
];

export default BuildQuiz;
