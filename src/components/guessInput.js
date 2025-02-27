import React, { useState } from 'react';
import Typo from 'typo-js';

const dictionary = new Typo('en_GB', false, false, { dictionaryPath: '.' });

const handleGuessSubmit = (
  event,
  onNewGuess,
  inputGuess,
  setInputGuess,
  setValidityMessage,
) => {
  event.preventDefault();
  const [formInput] = event.target;

  if (!formInput.value.length) {
    setValidityMessage('required');
    return;
  }

  if (formInput.value.length !== 5) {
    setValidityMessage('not long enough');
    return;
  }

  if (!dictionary.check(inputGuess)) {
    setValidityMessage('not a real word mate');
    return;
  }

  onNewGuess(inputGuess);
  console.log({ inputGuess });

  setValidityMessage('');
  setInputGuess('');
};

const handleInputChange = (inputField, setInputGuess, setValidityMessage) => {
  setInputGuess(inputField.value.toUpperCase());
  setValidityMessage('');
};

const GuessInput = ({
  onNewGuess,
  playState,
}) => {
  const [inputGuess, setInputGuess] = useState('');
  const [validityMessage, setValidityMessage] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      visibility={playState === 'playing' ? 'visible' : 'hidden'}
      onSubmit={(event) => {
        handleGuessSubmit(event, onNewGuess, inputGuess, setInputGuess, setValidityMessage);
      }}
    >
      <div className="label-line">
        <label htmlFor="guess-input">Enter guess:</label>
        {validityMessage.length > 0 && (
          <p className="input-error">
            {validityMessage}
          </p>
        )}
      </div>
      <input
        id="guess-input"
        type="text"
        value={inputGuess}
        noValidate
        maxLength={5}
        autoComplete="off"
        onChange={({ target: inputField }) => {
          handleInputChange(inputField, setInputGuess, setValidityMessage);
        }}
        disabled={playState !== 'playing'}
      />
    </form>
  );
};

export default GuessInput;
