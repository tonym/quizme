import { Quiz, QuizQuestion } from '../../types';

const NumbersQuiz: Quiz[] = [
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo',
    questions: generateNumberQuiz(0, 10000)
  },
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo 0 - 100',
    questions: generateNumberQuiz(0, 100)
  },
  {
    description: 'Jaké číslo říkám?',
    name: 'Čislo 100 - 1000',
    questions: generateNumberQuiz(100, 1000)
  },
  {
    description: 'Jaké číslo říkám?',
    name: 'Řadové číslovky',
    questions: [
      {
        answer: ['first', '1st', '1'],
        question: 'první'
      },
      {
        answer: ['second', '2nd', '2'],
        question: 'druhý'
      },
      {
        answer: ['third', '3rd', '3'],
        question: 'třetí'
      },
      {
        answer: ['fourth', '4th', '4'],
        question: 'čtvrtý'
      },
      {
        answer: ['fifth', '5th', '5'],
        question: 'pátý'
      },
      {
        answer: ['sixth', '6th', '6'],
        question: 'šestý'
      },
      {
        answer: ['seventh', '7th', '7'],
        question: 'sedmý'
      },
      {
        answer: ['eighth', '8th', '8'],
        question: 'osmý'
      },
      {
        answer: ['nineth', '9th', '9'],
        question: 'devátý'
      },
      {
        answer: ['tenth', '10th', '10'],
        question: 'desátý'
      },
      {
        answer: ['eleventh', '11th', '11'],
        question: 'jedenáctý'
      },
      {
        answer: ['twelfth', '12th', '12'],
        question: 'dvanáctý'
      },
      {
        answer: ['thirteenth', '13th', '13'],
        question: 'třináctý'
      },
      {
        answer: ['fourteenth', '14th', '14'],
        question: 'čtrnáctý'
      },
      {
        answer: ['fifteenth', '15th', '15'],
        question: 'patnáctý'
      },
      {
        answer: ['sixteenth', '16th', '16'],
        question: 'šestnáctý'
      },
      {
        answer: ['seventeenth', '17th', '17'],
        question: 'sedmnáctý'
      },
      {
        answer: ['eighteenth', '18th', '18'],
        question: 'osmnáctý'
      },
      {
        answer: ['ninetheenth', '19th', '19'],
        question: 'devatenáctý'
      },
      {
        answer: ['twentyith', '20th', '20'],
        question: 'dvacátý'
      },
      {
        answer: ['twentyfirst', '21st', '21'],
        question: 'dvacátý první'
      },
      {
        answer: ['twentysecond', '22nd', '22'],
        question: 'dvacátý druhý'
      },
      {
        answer: ['twentythird', '23rd', '23'],
        question: 'dvacátý třetí'
      },
      {
        answer: ['twentyfourth', '24th', '24'],
        question: 'dvacátý čtvrtý'
      },
      {
        answer: ['twentyfifth', '25th', '25'],
        question: 'dvacátý pátý'
      },
      {
        answer: ['twentysixth', '26th', '26'],
        question: 'dvacátý šestý'
      },
      {
        answer: ['twentyseventh', '27th', '27'],
        question: 'dvacátý sedmý'
      },
      {
        answer: ['twentyeighth', '28th', '28'],
        question: 'dvacátý osmý'
      },
      {
        answer: ['twentynineth', '29th', '29'],
        question: 'dvacátý devátý'
      },
      {
        answer: ['thirtyith', '30th', '30'],
        question: 'třicátý'
      },
      {
        answer: ['thirtyfirst', '31st', '31'],
        question: 'třicátý první'
      }
    ]
  }
];

function generateNumberQuiz(start = 0, end = 1001): QuizQuestion[] {
  const ret = [];
  let n = start;
  while (n < end) {
    ret.push({
      answer: [n.toString()],
      question: n.toString()
    });
    n++;
  }
  return ret;
}

export default NumbersQuiz;
