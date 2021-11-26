import { Fragment, FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircle from '@mui/icons-material/PauseCircle';
import { Quiz } from '../../types';

interface QuizPlayerProps {
  quiz: Quiz | null;
}

let quizReader = new SpeechSynthesisUtterance();
quizReader.lang = 'cs-CZ';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === quizReader.lang);
  quizReader.voice = voices[0];
};

const checkIcon = <Check />;
const nextIcon = <ArrowForward />;
const playIcon = <PlayCircle />;
const pauseIcon = <PauseCircle />;
const stopIcon = <PlayCircleOutlined />;

export const QuizPlayer: FunctionalComponent<QuizPlayerProps> = props => {
  return (
    <Box sx={{ paddingTop: '32px' }}>
      {props.quiz ? (
        <Fragment>
          <Typography gutterBottom variant="h6">
            {props.quiz.description}
          </Typography>
          <TextField fullWidth variant="outlined"></TextField>
          <Box sx={{ display: 'flex', mt: 0.5 }}>
            <Box sx={{ flex: 1 }}>
              <IconButton size="large">{playIcon}</IconButton>
            </Box>
            <Box sx={{ mr: 1 }}>
              <IconButton size="large">{checkIcon}</IconButton>
            </Box>
            <Box>
              <IconButton size="large">{nextIcon}</IconButton>
            </Box>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
