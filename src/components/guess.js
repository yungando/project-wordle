// import React from 'react';

// const Guess = ({ guess }) => {
//   // console.log({ guess });
//   const guessRow = guess.length ? guess : ['', '', '', '', ''];
//   return (
//     <p className='guess' key={`GUESS-${guess.join('')}`}>
//       {guessRow.map((block) => (
//         <span className="cell" key={`cell-${block}`} >{block}</span>
//       ))}
//     </p>
//   );
// };

// export default Guess;

import React from 'react';

import { checkGuess } from '../game-helpers.js';

const Guess = ({ answer, guess }) => {
  // const validGuess = !!guess.length;
  const blankGuess = [
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
  ];
  const guessRow = guess.length ? checkGuess(guess.join(''), answer) : blankGuess;
  // console.log({ guessRow });

  return (
    <p className='guess' key={`GUESS-${guess.join('')}`}>
      {guessRow.map((guessBlock) => (
        // <span className={`cell${validGuess ? ` ${guessBlock.status}` : ''}`} key={crypto.randomUUID()} >{guessBlock.letter}</span>
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        <span className={'cell'} key={crypto.randomUUID()} >{guessBlock.letter}</span>
      ))}
    </p>
  );
};

export default Guess;
