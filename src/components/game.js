import React, { useState } from 'react';

import { sample } from '../utils.js';
import { WORDS } from '../data.js';
// eslint-disable-next-line n/no-missing-import
import { GuessInput, GuessResults, GameOverBanner } from './';
import { NUM_OF_GUESSES_ALLOWED } from '../constants.js';

const getNewAnswer = () => sample(WORDS);

const Game = () => {
  const [answer, setNewAnswer] = useState(() => {
    const newAnswer = getNewAnswer();
    console.log({ newAnswer });
    return newAnswer;
  });
  const [guessArray, setGuessArray] = useState([]);
  const [playState, setPlayState] = useState('playing');

  const handleNewGuess = (inputGuess) => {
    const newGuessArray = guessArray.concat(inputGuess);
    setGuessArray(newGuessArray);
    if (inputGuess === answer) {
      setPlayState('won');
      return;
    }
    if (newGuessArray.length === NUM_OF_GUESSES_ALLOWED) setPlayState('lost');
  };

  const resetGame = () => {
    setGuessArray([]);
    setPlayState('playing');

    const newAnswer = getNewAnswer();
    console.log({ newAnswer });
    setNewAnswer(newAnswer);
  };

  return (
    <>
      <GuessResults
        guessArray={guessArray}
        answer={answer}
      />
      {
        playState === 'playing'
          ? (
            <GuessInput
              onNewGuess={handleNewGuess}
              playState={playState}
            />
          ) : (
            <GameOverBanner
              playState={playState}
              numOfGuesses={guessArray.length}
              answer={answer}
              resetGame={resetGame}
            />
          )
      }
    </>
  );
};

export default Game;
