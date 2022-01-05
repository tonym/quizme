import { FunctionalComponent, h, RefObject } from 'preact';
import { useLayoutEffect, useRef, useState } from 'preact/hooks';
import Fuse from 'fuse.js';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Check from '@mui/icons-material/Check';
import Container from '@mui/material/Container';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import Shuffle from '@mui/icons-material/Shuffle';
import ShuffleOn from '@mui/icons-material/ShuffleOn';
import { Flashcard } from '../flashcard';
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

export const QuizPlayer: FunctionalComponent<QuizPlayerProps> = props => {
  const { quiz } = props;

  const [answer, setAnswer] = useState('');
  const [playing, setPlaying] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [question, setQuestion] = useState<QuizQuestion>();
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.8);
  const [result, setResult] = useState<any>();
  const [resultColor, setResultColor] = useState('success');
  const [showQuestion, setShowQuestion] = useState(false);
  const [shuffle, setShuffle] = useState(true);
  const [threshold, setThreshold] = useState(0.6);
  const [volume, setVolume] = useState(8);

  const answerInputRef: RefObject<HTMLInputElement> = useRef(null);
  const playButtonRef: RefObject<HTMLButtonElement> = useRef(null);

  useLayoutEffect(() => {
    focusPlayButton();
  }, [quiz]);

  function changeAnswer(event: React.KeyboardEvent<HTMLInputElement>): any {
    const { value } = event.target as HTMLInputElement;
    setAnswer(value);
  }

  function changePitch(event: Event): any {
    const { value } = event.target as HTMLInputElement;
    setPitch(+value);
  }

  function changeRate(event: Event): any {
    const { value } = event.target as HTMLInputElement;
    setRate(+value);
  }

  function changeShowQuestion(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): any {
    setShowQuestion(checked);
  }

  function changeThreshold(event: Event): any {
    const { value } = event.target as HTMLInputElement;
    setThreshold(+value);
  }

  function changeVolume(event: Event): any {
    const { value } = event.target as HTMLInputElement;
    setVolume(+value);
  }

  function checkAnswer(): boolean {
    const collection = question ? question.answer : [];
    const fuse = new Fuse([], { threshold });
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
      quizReader.pitch = pitch;
      quizReader.rate = rate;
      quizReader.text = currentQuestion.question;
      quizReader.volume = volume;
      window.speechSynthesis.speak(quizReader);
      if (showQuestion) {
        setResult(<Flashcard quizQuestion={currentQuestion} />);
        setResultColor('inherit');
      }
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
        setResult(<Check sx={{ fontSize: '9rem', fontWeight: 900 }} />);
      } else {
        setResultColor('error.main');
        setResult(
          <span>
            Správná odpověď je:
            <br />
            <Box sx={{ fontSize: '6rem', fontWeight: 700, mt: 2 }}>{question && question.answer[0]}</Box>
          </span>
        );
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
          <Typography gutterBottom variant="subtitle1">
            {quiz.description}
          </Typography>
          <TextField fullWidth onKeyUp={changeAnswer} inputRef={answerInputRef} value={answer} variant="outlined"></TextField>
          <Box sx={{ alignItems: 'center', display: 'flex', gap: 2, mt: 0.5 }}>
            <Box>
              <IconButton onClick={playQuestion} ref={playButtonRef} size="large">
                {playing ? <PlayCircle /> : <PlayCircleOutline />}
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={toggleShuffle} size="large">
                {shuffle ? <ShuffleOn /> : <Shuffle />}
              </IconButton>
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, flex: 1, mr: 1 }}>
              <Typography>Threshold:</Typography>
              <Slider
                marks={true}
                max={1}
                min={0}
                onChange={changeThreshold}
                size="small"
                step={0.1}
                sx={{ mt: 1 }}
                value={threshold}
                valueLabelDisplay="auto"
              />
            </Box>
            <Box sx={{ flex: 2 }}>
              <FormControlLabel control={<Checkbox onChange={changeShowQuestion} checked={showQuestion} />} label="Zobrazit kartu" />
            </Box>
            <Box>
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
          <Typography align="center" sx={{ color: resultColor, mt: 8 }} variant="h4">
            {result}
          </Typography>
          <AppBar color="transparent" elevation={0} position="fixed" sx={{ bottom: 0, paddingBottom: 6, top: 'auto' }}>
            <Container>
              <Box sx={{ alignItems: 'center', display: 'flex', gap: 4, width: '100%' }}>
                <Box sx={{ display: 'flex', flex: 1, gap: 1 }}>
                  <Typography>Pitch:</Typography>
                  <Slider min={0.1} max={2} onChange={changePitch} value={pitch} valueLabelDisplay="auto" step={0.1}></Slider>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, gap: 1 }}>
                  <Typography>Rate:</Typography>
                  <Slider min={0.1} max={2} onChange={changeRate} value={rate} valueLabelDisplay="auto" step={0.1}></Slider>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, gap: 1 }}>
                  <Typography>Volume:</Typography>
                  <Slider min={0} max={10} onChange={changeVolume} value={volume} valueLabelDisplay="auto" step={1}></Slider>
                </Box>
              </Box>
            </Container>
          </AppBar>
        </form>
      ) : null}
    </Box>
  );
};
