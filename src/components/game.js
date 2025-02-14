import React from 'react';

import { sample } from '../utils.js';
import { WORDS } from '../data.js';
import GuessInput from './guessInput.js';
import GuessResults from './guessResults.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Game = () => {
  const [inputGuess, setInputGuess] = React.useState('');
  const [guessArray, setGuessArray] = React.useState([]);
  return (
    <>
      <GuessResults
        answer={answer}
        guessArray={guessArray}
      />
      <GuessInput
        inputGuess={inputGuess}
        setInputGuess={setInputGuess}
        guessArray={guessArray}
        setGuessArray={setGuessArray}
      />
    </>
  );
};

export default Game;
