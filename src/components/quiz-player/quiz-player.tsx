import { FunctionalComponent, h, RefObject } from 'preact';
import { useLayoutEffect, useRef, useState } from 'preact/hooks';
import Fuse from 'fuse.js';
import Box from '@mui/material/Box';
import ArrowForward from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Shuffle from '@mui/icons-material/Shuffle';
import ShuffleOn from '@mui/icons-material/ShuffleOn';
import { Quiz, QuizQuestion } from '../../types';

const fuse = new Fuse([]);

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

export const QuizPlayer: FunctionalComponent<QuizPlayerProps> = props => {
  const { quiz } = props;

  const [answer, setAnswer] = useState('');
  const [playing, setPlaying] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [question, setQuestion] = useState<QuizQuestion>();
  const [shuffle, setShuffle] = useState(true);
  const [result, setResult] = useState('');
  const [resultColor, setResultColor] = useState('success');

  const answerInputRef: RefObject<HTMLInputElement> = useRef(null);
  const playButtonRef: RefObject<HTMLButtonElement> = useRef(null);

  useLayoutEffect(() => {
    focusPlayButton();
  }, [quiz]);

  function changeAnswer(event: React.KeyboardEvent<HTMLInputElement>): any {
    const { value } = event.target as HTMLInputElement;
    setAnswer(value);
  }

  function checkAnswer(): boolean {
    const collection = question ? question.answer : [];
    fuse.setCollection(collection as never[]);
    const result = fuse.search(answer);
    return result.length > 0;
  }

  function focusPlayButton(): void {
    playButtonRef.current && playButtonRef.current.focus();
  }

  function nextQuestion(): void {
    setAnswer('');
    setNextDisabled(true);
    setPlaying(false);
    setQuestion(shuffle ? undefined : question);
    setResult('');
    focusPlayButton();
  }

  function playQuestion(): void {
    if (quiz) {
      const currentQuestion: QuizQuestion = playing && question ? question : selectQuestion();
      setQuestion(currentQuestion);
      setAnswer('');
      setPlaying(true);
      quizReader.text = currentQuestion.question;
      window.speechSynthesis.speak(quizReader);
    }
    answerInputRef.current && answerInputRef.current.focus();
  }

  function selectQuestion(): QuizQuestion {
    let ret: QuizQuestion;
    if (shuffle) {
      ret = quiz!.questions[Math.floor(Math.random() * quiz!.questions.length)];
    } else {
      let index = question
        ? quiz!.questions.findIndex(item => {
            return item === question;
          }) + 1
        : 0;
      index = index < quiz!.questions.length ? index : 0;
      ret = quiz!.questions[index];
    }
    return ret;
  }

  function submitForm(event: Event): void {
    event.preventDefault();
    if (nextDisabled) {
      const result = checkAnswer();
      if (result) {
        setResultColor('success.main');
        setResult('Correct');
      } else {
        setResultColor('error.main');
        setResult(`Almost. The correct answer is ${question && question.answer[0]}`);
      }
      setNextDisabled(false);
    } else {
      nextQuestion();
    }
  }

  function toggleShuffle(): void {
    setShuffle(!shuffle);
  }

  return (
    <Box sx={{ paddingTop: '32px' }}>
      {quiz ? (
        <form id="quiz-form" onSubmit={submitForm}>
          <Typography gutterBottom variant="h6">
            {quiz.description}
          </Typography>
          <TextField fullWidth onKeyUp={changeAnswer} inputRef={answerInputRef} value={answer} variant="outlined"></TextField>
          <Box sx={{ alignItems: 'center', display: 'flex', mt: 0.5 }}>
            <Box sx={{ mr: 1 }}>
              <IconButton onClick={playQuestion} ref={playButtonRef} size="large">
                <PlayCircle />
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={toggleShuffle} size="large">
                {shuffle ? <ShuffleOn /> : <Shuffle />}
              </IconButton>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography align="center" sx={{ color: resultColor }}>
                {result}
              </Typography>
            </Box>
            <Box sx={{ mr: 1 }}>
              <IconButton disabled={answer.length === 0} size="large" type="submit">
                <Check />
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={nextQuestion} disabled={nextDisabled} size="large">
                <ArrowForward />
              </IconButton>
            </Box>
          </Box>
        </form>
      ) : null}
    </Box>
  );
};
