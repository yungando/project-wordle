import React from 'react';

const GameOverBanner = ({ playState }) => (
  <div className={`${playState === 'won' ? 'happy' : 'sad'} banner`}>
    <p>
      {`${playState === 'won' ? 'nice one' : 'fucked it'}`}
    </p>
  </div>
);

export default GameOverBanner;
