import React from 'react';

const Guess = ({ guess }) => (
  <p className='guess' key={`guess-${guess.join('')}`}>
    {guess.map(({ letter, status }) => (
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      <span className={`cell ${status}`} key={crypto.randomUUID()} >{letter}</span>
    ))}
  </p>
);

export default Guess;
