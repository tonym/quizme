import { Quiz, QuizQuestion } from '../../types';

const PlacesQuiz: Quiz[] = [
  {
    description: 'Opakujte v angličtině',
    name: 'Místa ve městě',
    questions: [
      {
        answer: ['library'],
        question: 'knihovna'
      },
      {
        answer: ['university', 'college'],
        question: 'univerzita'
      },
      {
        answer: ['school'],
        question: 'škola'
      },
      {
        answer: ['street'],
        question: 'ulice'
      },
      {
        answer: ['bus stop'],
        question: 'autobusová zastávka'
      },
      {
        answer: ['cafe'],
        question: 'kavárna'
      },
      {
        answer: ['store', 'shop'],
        question: 'obchod'
      },
      {
        answer: ['shopping center', 'department store'],
        question: 'nákupní centrum'
      },
      {
        answer: ['bank'],
        question: 'banka'
      },
      {
        answer: ['train station'],
        question: 'vlakové nádraží'
      },
      {
        answer: ['museum'],
        question: 'muzeum'
      },
      {
        answer: ['apartment house', 'apartment building', 'apartments'],
        question: 'bytový dům'
      },
      {
        answer: ['fire house'],
        question: 'hasiči'
      },
      {
        answer: ['post office'],
        question: 'pošta'
      },
      {
        answer: ['hospital'],
        question: 'nemocnice'
      },
      {
        answer: ['parking lot'],
        question: 'parkoviště'
      },
      {
        answer: ['gas station'],
        question: 'benzinka'
      },
      {
        answer: ['beauty salon'],
        question: 'salón krásy'
      },
      {
        answer: ['hairdresser'],
        question: 'kadeřnictví'
      },
      {
        answer: ['pet shop'],
        question: 'zverimex'
      },
      {
        answer: ['toy store'],
        question: 'obchod s hračkami'
      },
      {
        answer: ['bakery'],
        question: 'pekárna'
      },
      {
        answer: ['shoe store'],
        question: 'obchod s obuví'
      },
      {
        answer: ['florist', 'flower shop'],
        question: 'květinářství'
      },
      {
        answer: ['book store'],
        question: 'knihkupectví'
      },
      {
        answer: ['crosswalk'],
        question: 'přechod pro chodce'
      },
      {
        answer: ['intersection'],
        question: 'křižovatka'
      }
    ]
  }
];

export default PlacesQuiz;
