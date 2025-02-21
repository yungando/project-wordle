import React, { useState } from 'react';

import { checkGuess } from '../game-helpers';

const GuessInput = ({
  dictionary,
  guessArray,
  setGuessArray,
  playState,
  setPlayState,
  answer,
}) => {
  const [inputGuess, setInputGuess] = useState('');
  return (
    <form
      className="guess-input-wrapper"
      visibility={playState === 'playing' ? 'visible' : 'hidden'}
      onSubmit={(event) => {
        event.preventDefault();
        const formInput = event.target[0];

        if (!dictionary.check(inputGuess)) {
          formInput.setCustomValidity('not a real word mate');
          formInput.reportValidity();
          return;
        }

        console.log({ inputGuess });

        if (formInput.value.length !== 5) {
          formInput.setCustomValidity('Guess must be 5 characters long.');
          formInput.reportValidity();
          return;
        }

        const newGuessArray = guessArray.concat(inputGuess);
        setGuessArray(newGuessArray);

        formInput.setCustomValidity('');
        setInputGuess('');

        const correctLettersInGuess = checkGuess(inputGuess, answer).filter((letter) => letter.status === 'correct').length;
        if (correctLettersInGuess === 5) {
          setPlayState('won');
          return;
        }

        if (newGuessArray.length === 6) setPlayState('lost');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputGuess}
        required
        autoComplete="off"
        onChange={(event) => {
          setInputGuess(event.target.value.toUpperCase());
          event.target.setCustomValidity('');
        }}
        disabled={playState !== 'playing'}
      />
    </form>
  );
};

export default GuessInput;
