export interface QuizQuestion {
  answer: string[];
  question: string;
}
export interface Quiz {
  description: string;
  name: string;
  questions: QuizQuestion[];
}
