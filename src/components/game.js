import React from 'react';
import Typo from 'typo-js';
import { sample } from '../utils.js';
import { WORDS } from '../data.js';
import GuessInput from './guessInput.js';
import GuessResults from './guessResults.js';
import GameOverBanner from './gameOverBanner.js';

const dictionary = new Typo('en_GB', false, false, { dictionaryPath: '.' });

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

console.log(import.meta);

const Game = () => {
  const [guessArray, setGuessArray] = React.useState([]);
  const [playState, setPlayState] = React.useState('playing');

  return (
    <>
      <GuessResults
        guessArray={guessArray}
        answer={answer}
      />
      <GuessInput
        dictionary={dictionary}
        guessArray={guessArray}
        setGuessArray={setGuessArray}
        playState={playState}
        setPlayState={setPlayState}
        answer={answer}
      />
      {playState !== 'playing' && <GameOverBanner playState={playState} />}
    </>
  );
};

export default Game;
