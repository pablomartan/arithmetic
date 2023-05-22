import React, { useState, useEffect } from 'react';

import { Question } from './Question';
import { Settings } from './Settings';
import { Timer } from './Timer';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operators, setOperators] = useState(['+']);

  return(
    <div className="game">
      <Timer gameOn={gameOn} setGameOn={setGameOn} />
      <Settings operators={operators} setOperators={setOperators} />
      <button id="start-button" onClick={() => setGameOn(!gameOn)}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question ops={operators} /> : null}
    </div>
  );
};
