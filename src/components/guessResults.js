import React from 'react';

import { range } from '../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../constants.js';
import { checkGuess } from '../game-helpers.js';

import Guess from './guess.js';

const GuessResults = ({ answer, guessArray }) => {
  const blankGrid = range(NUM_OF_GUESSES_ALLOWED - guessArray.length).map(() => '');

  const guessDisplay = [...guessArray, ...blankGrid];

  const blankGuess = new Array(5).fill({ letter: '', status: '' });
  return (
    <div className='guess-results'>
      {guessDisplay.map((guess, index) => (
        <Guess
          key={index}
          guess={guess.length ? checkGuess(guess, answer) : blankGuess}
        />
      ))}
    </div>
  );
};

export default GuessResults;
