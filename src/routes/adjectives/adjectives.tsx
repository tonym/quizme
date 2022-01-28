import { FunctionalComponent, h } from 'preact';
import Typography from '@mui/material/Typography';
import { quizzes } from '../../data/adjectives';
import { Quiz } from '../../components/quiz';

export const Adjectives: FunctionalComponent = () => {
  return (
    <div>
      <Typography gutterBottom={true} variant="h5">
        Přídavná jména
      </Typography>
      <Quiz quizzes={quizzes} />
    </div>
  );
};
