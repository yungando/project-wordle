import React, { useState } from 'react';
import Typo from 'typo-js';

import { sample } from '../utils.js';
import { WORDS } from '../data.js';

// eslint-disable-next-line n/no-missing-import
import { GuessInput, GuessResults, GameOverBanner } from './';

const dictionary = new Typo('en_GB', false, false, { dictionaryPath: '.' });
const getNewAnswer = () => sample(WORDS);

const Game = () => {
  const [answer, setNewAnswer] = useState(() => {
    const newAnswer = getNewAnswer();
    console.log({ newAnswer });
    return newAnswer;
  });
  const [guessArray, setGuessArray] = useState([]);
  const [playState, setPlayState] = useState('playing');

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
              dictionary={dictionary}
              guessArray={guessArray}
              setGuessArray={setGuessArray}
              playState={playState}
              setPlayState={setPlayState}
              answer={answer}
            />
          ) : (
            <GameOverBanner
              playState={playState}
              setGuessArray={setGuessArray}
              setPlayState={setPlayState}
              setNewAnswer={setNewAnswer}
              getNewAnswer={getNewAnswer}
            />
          )
      }
    </>
  );
};

export default Game;
