import React from 'react';
// eslint-disable-next-line n/no-missing-import
import { Game, Header } from './components';

const App = () => (
  <div className="wrapper">
    <Header />

    <div className="game-wrapper">
      <Game />
    </div>
  </div>
);

export default App;
