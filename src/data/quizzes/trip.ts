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
  },
  {
    description: 'Opakujte v angličtině',
    name: 'V hotelu',
    questions: [
      {
        answer: ['great', 'awesome'],
        question: 'výborně'
      },
      {
        answer: ['to check', 'check'],
        question: 'zkontrolovat'
      },
      {
        answer: ['to sign', 'sign'],
        question: 'podepsat'
      },
      {
        answer: ['clean', 'tidy'],
        question: 'uklizený'
      },
      {
        answer: ['to agree', 'agree'],
        question: 'souhlasit'
      },
      {
        answer: ['single room'],
        question: 'jednolůžkový pokoj'
      },
      {
        answer: ['elevator', 'lift'],
        question: 'výtah'
      },
      {
        answer: ['opposite'],
        question: 'naproti'
      },
      {
        answer: ['over there'],
        question: 'támhle'
      },
      {
        answer: ['personally'],
        question: 'osobně'
      },
      {
        answer: ['passport'],
        question: 'pas'
      },
      {
        answer: ['to clean'],
        question: 'uklidit'
      },
      {
        answer: ['to check out', 'check out', 'sign out', 'log out', 'log off'],
        question: 'odhlásit se'
      },
      {
        answer: ['booked', 'reserved'],
        question: 'rezervovaný'
      },
      {
        answer: ['receipt', 'bill'],
        question: 'účet'
      },
      {
        answer: ['notify', 'report', 'announce'],
        question: 'ohlásit'
      },
      {
        answer: ['key'],
        question: 'klíč'
      },
      {
        answer: ['staircase', 'stairs'],
        question: 'schodiště'
      }
    ]
  }
];

export default TripQuiz;
