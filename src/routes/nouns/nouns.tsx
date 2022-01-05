import { FunctionalComponent, h } from 'preact';
import Typography from '@mui/material/Typography';
import { quizzes } from '../../data/nouns';
import { Quiz } from '../../components/quiz';

export const Nouns: FunctionalComponent = () => {
  return (
    <div>
      <Typography gutterBottom={true} variant="h5">
        Podstatná jména
      </Typography>
      <Quiz quizzes={quizzes} />
    </div>
  );
};
