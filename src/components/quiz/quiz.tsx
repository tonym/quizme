import { FunctionalComponent, h } from 'preact';
import { quizzes } from './quizzes';

let speech = new SpeechSynthesisUtterance();
speech.lang = 'cs-CZ';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === speech.lang);
  speech.voice = voices[0];
};

export const Quiz: FunctionalComponent = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <p>This is the Quiz component.</p>
    </div>
  );
};
