import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { quizzes } from '../../data/quizzes';
import { QuizPlayer } from '../quiz-player';

export const Quiz: FunctionalComponent = () => {
  const [quiz, setQuiz] = useState(-1);

  const handleChange = (event: SelectChangeEvent): void => {
    setQuiz(+event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="quiz-select-label">Select quiz</InputLabel>
        <Select labelId="quiz-select-label" id="quiz-select" onChange={handleChange} value={`${quiz}`} variant="filled">
          {quizzes.map((quiz, index) => {
            return (
              <MenuItem key={index} value={index}>
                {quiz.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <QuizPlayer quiz={quizzes[quiz] || null} />
    </Box>
  );
};
