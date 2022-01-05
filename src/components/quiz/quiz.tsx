import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { QuizPlayer } from '../quiz-player';
import { Quiz as QuizType } from '../../types';

interface QuizProps {
  quizzes: QuizType[];
}

export const Quiz: FunctionalComponent<QuizProps> = props => {
  const { quizzes } = props;

  const [quiz, setQuiz] = useState(-1);
  const [focus, setFocus] = useState(false);

  const handleChange = (event: SelectChangeEvent): void => {
    setQuiz(-1);
    setQuiz(+event.target.value);
    setFocus(false);
  };

  return (
    <Box>
      <FormControl focused={focus} fullWidth>
        <Select
          labelId="quiz-select-label"
          id="quiz-select"
          onChange={handleChange}
          onOpen={() => setFocus(true)}
          value={`${quiz}`}
          variant="outlined"
        >
          <MenuItem key="-1" value="-1">
            Vybrat
          </MenuItem>
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
