import React, { useState } from 'react';
import Typo from 'typo-js';

const dictionary = new Typo('en_GB', false, false, { dictionaryPath: '.' });

const handleGuessSubmit = (
  event,
  handleNewGuess,
  inputGuess,
  setInputGuess,
) => {
  event.preventDefault();
  const [formInput] = event.target;

  if (!dictionary.check(inputGuess)) {
    formInput.setCustomValidity('not a real word mate');
    formInput.reportValidity();
    return;
  }

  if (formInput.value.length !== 5) {
    formInput.setCustomValidity('Guesses must be 5 characters long.');
    formInput.reportValidity();
    return;
  }

  handleNewGuess(inputGuess);
  console.log({ inputGuess });

  formInput.setCustomValidity('');
  setInputGuess('');
};

const handleInputChange = (inputField, setInputGuess) => {
  setInputGuess(inputField.value.toUpperCase());
  inputField.setCustomValidity('');
};

const GuessInput = ({
  handleNewGuess,
  playState,
}) => {
  const [inputGuess, setInputGuess] = useState('');
  return (
    <form
      className="guess-input-wrapper"
      visibility={playState === 'playing' ? 'visible' : 'hidden'}
      onSubmit={(event) => handleGuessSubmit(event, handleNewGuess, inputGuess, setInputGuess)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputGuess}
        required
        maxLength={5}
        autoComplete="off"
        onChange={({ target: inputField }) => handleInputChange(inputField, setInputGuess)}
        disabled={playState !== 'playing'}
      />
    </form>
  );
};

export default GuessInput;
