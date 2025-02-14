import React from 'react';

const GuessInput = ({
  inputGuess, setInputGuess, guessArray, setGuessArray,
}) => (
  <form
    className="guess-input-wrapper"
    onSubmit={(event) => {
      event.preventDefault();
      const formInput = event.target[0];

      console.log({ inputGuess });

      if (formInput.value.length !== 5) {
        formInput.setCustomValidity('Guess must be 5 characters long.');
        formInput.reportValidity();
        return;
      }
      formInput.setCustomValidity('');

      const newGuessArray = guessArray.concat(inputGuess);
      setGuessArray(newGuessArray);
      setInputGuess('');
    }}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      value={inputGuess}
      required
      onChange={(event) => {
        setInputGuess(event.target.value.toUpperCase());
        event.target.setCustomValidity('');
      }}
    />
  </form>
);

export default GuessInput;
