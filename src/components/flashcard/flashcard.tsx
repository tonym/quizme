import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { QuizQuestion } from '../../types';

const FCard = styled(Paper)(({ theme }) => ({
  height: 200,
  transformStyle: 'preserve-3d',
  transition: theme.transitions.create('transform', { duration: '1s' }),
  width: 400,
  '& .front, .back': {
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: 'inherit',
    backgroundImage: 'inherit',
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    top: 70,
    width: '100%'
  },
  '& .back': {
    transform: 'rotateY( 180deg )'
  }
}));

const FContainer = styled('div')({
  display: 'inline-block',
  '&:hover .f-card': {
    transform: 'rotateY( 180deg )'
  }
});

interface FlashcardProps {
  quizQuestion: QuizQuestion;
}

export const Flashcard: FunctionalComponent<FlashcardProps> = props => {
  const { quizQuestion } = props;

  const [side, setSide] = useState<'back' | 'front'>('front');

  function changeSide(event: Event): void {
    setSide(side === 'front' ? 'back' : 'front');
  }
  return (
    <FContainer>
      <FCard className="f-card">
        <div className="front">
          <Typography align="center" variant="inherit">
            {quizQuestion.question}
          </Typography>
        </div>
        <div className="back">
          <Typography align="center" variant="inherit">
            {quizQuestion.answer[0]}
          </Typography>
        </div>
      </FCard>
    </FContainer>
  );
};
