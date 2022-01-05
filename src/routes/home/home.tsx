import { FunctionalComponent, h } from 'preact';
import { quizzes } from '../../data/quizzes';
import { Quiz } from '../../components/quiz';

export const Home: FunctionalComponent = () => {
  return (
    <div>
      <Quiz quizzes={quizzes} />
    </div>
  );
};
