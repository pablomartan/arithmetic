import React, { useState, useEffect } from 'react';

import { Game } from './components/Game';

export const App = () => {
  const [gameOn, setGameOn] = useState(false);
  
  return(
    <div>
      <h1>This is a simple math game</h1>
      <h2>Game is {gameOn ? 'on' : 'off' }</h2>
      <button onClick={() => setGameOn(!gameOn)}>{gameOn ? 'Stop' : 'Start'}</button>
      {gameOn ? <Game /> : null}
    </div>
  );
};
