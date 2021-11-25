import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircle from '@mui/icons-material/PauseCircle';
import { Quiz } from '../../types';

interface QuizPlayerProps {
  quiz: Quiz | null;
}

let speech = new SpeechSynthesisUtterance();
speech.lang = 'cs-CZ';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === speech.lang);
  speech.voice = voices[0];
};

const PlayIcon = <PlayCircle />;
const PauseIcon = <PauseCircle />;
const StopIcon = <PlayCircleOutlined />;

export const QuizPlayer: FunctionalComponent<QuizPlayerProps> = props => {
  return <div>Quiz player for: {props.quiz?.name}</div>;
};
