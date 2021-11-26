import { Fragment, FunctionalComponent, h, RefObject } from 'preact';
import { useRef, useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircle from '@mui/icons-material/PauseCircle';
import { Quiz, QuizQuestion } from '../../types';

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
  const { quiz } = props;

  const [answer, setAnswer] = useState('');
  const [nextDisabled, setNextDisabled] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [question, setQuestion] = useState<QuizQuestion>();
  const [started, setStarted] = useState(false);

  const answerInput: RefObject<HTMLInputElement> = useRef(null);

  function changeAnswer(event: React.KeyboardEvent<HTMLInputElement>): any {
    const { value } = event.target as HTMLInputElement;
    setAnswer(value);
  }

  function playQuestion(): void {
    if (quiz) {
      const currentQuestion: QuizQuestion = question ? question : quiz.questions[Math.floor(Math.random() * quiz.questions.length)];
      setQuestion(currentQuestion);
      setAnswer('');
      quizReader.text = currentQuestion.question;
      window.speechSynthesis.speak(quizReader);
    }
    answerInput.current && answerInput.current.focus();
  }

  return (
    <Box sx={{ paddingTop: '32px' }}>
      {quiz ? (
        <Fragment>
          <Typography gutterBottom variant="h6">
            {quiz.description}
          </Typography>
          <TextField fullWidth onKeyUp={changeAnswer} inputRef={answerInput} value={answer} variant="outlined"></TextField>
          <Box sx={{ display: 'flex', mt: 0.5 }}>
            <Box sx={{ flex: 1 }}>
              <IconButton onClick={playQuestion} size="large">
                {playIcon}
              </IconButton>
            </Box>
            <Box sx={{ mr: 1 }}>
              <IconButton disabled={answer.length === 0} size="large">
                {checkIcon}
              </IconButton>
            </Box>
            <Box>
              <IconButton disabled={nextDisabled} size="large">
                {nextIcon}
              </IconButton>
            </Box>
          </Box>
        </Fragment>
      ) : null}
    </Box>
  );
};
