import React from 'react';

const GameOverBanner = ({
  playState,
  numOfGuesses,
  answer,
  resetGame,
}) => (
  <div
    className={`${playState === 'won' ? 'happy' : 'sad'} banner`}
    onClick={() => resetGame()}
    style={{ cursor: 'pointer' }}
  >
    <p>
      {`${playState === 'won' ? `nice one, got it in ${numOfGuesses}` : `fucked it, it was ${answer}`}`}
    </p>
    <p>play again ?????</p>
  </div>
);

export default GameOverBanner;
