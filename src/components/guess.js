import React from 'react';

const Guess = ({ guess }) => {
  const cellId = React.useId();
  return (
    <p className='guess' key={`guess-${guess.join('')}`}>
      {guess.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={`${index}${cellId}cell`} >
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
