import React from 'react';

import Guess from './guess.js';
import { range } from '../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../constants.js';

const GuessResults = ({ answer, guessArray }) => {
  const guessBlanks = [];
  range(NUM_OF_GUESSES_ALLOWED - guessArray.length).map(() => guessBlanks.push(''));
  const guessDisplay = guessArray.concat(guessBlanks);

  // console.log({ guessBlanks, guessArray, guessDisplay });

  return (
    <div className='guess-results'>
      {guessDisplay.map((guess, index) => (
        <div key={`guess-${index}}`}>
          <Guess
            answer={answer}
            guess={guess.split('')}
          />
        </div>
      ))}
    </div>
  );
};

export default GuessResults;
