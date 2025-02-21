import React from 'react';

const handleBannerClick = (setGuessArray, setPlayState, setNewAnswer, getNewAnswer) => {
  setGuessArray([]);
  setPlayState('playing');
  const newAnswer = getNewAnswer();
  console.log({ newAnswer });
  setNewAnswer(getNewAnswer);
};

const GameOverBanner = ({
  playState, setGuessArray, setPlayState, setNewAnswer, getNewAnswer,
}) => (
  <div
    className={`${playState === 'won' ? 'happy' : 'sad'} banner`}
    onClick={() => handleBannerClick(setGuessArray, setPlayState, setNewAnswer, getNewAnswer)}
    style={{ cursor: 'pointer' }}
  >
    <p>
      {`${playState === 'won' ? 'nice one' : 'fucked it'}`}
    </p>
    <p>play again ?????</p>
  </div>
);

export default GameOverBanner;
