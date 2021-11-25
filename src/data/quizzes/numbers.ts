import { Quiz, QuizQuestion } from '../../types';

const numbersQuiz: Quiz[] = [
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

export default numbersQuiz;
