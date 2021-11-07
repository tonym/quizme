import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { quizzes } from './quizzes';

let speech = new SpeechSynthesisUtterance();
speech.lang = 'cs-CZ';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === speech.lang);
  speech.voice = voices[0];
};

export const Quiz: FunctionalComponent = () => {
  const [quiz, setQuiz] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setQuiz(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="quiz-select-label">Select quiz</InputLabel>
        <Select labelId="quiz-select-label" id="quiz-select" onChange={handleChange} value={quiz} variant="filled">
          {quizzes.map((quiz, index) => {
            return (
              <MenuItem key={index} value={index}>
                {quiz.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
