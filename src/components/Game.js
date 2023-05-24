import React, { useState } from 'react';

import { Question } from './Question';
import { Settings } from './Settings';
import { Timer } from './Timer';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operators, setOperators] = useState(['+']);
  const [time, setTime] = useState(300);
  const [max, setMax] = useState(20);

  return(
    <div className="game">
      <Timer gameOn={gameOn} setGameOn={setGameOn} time={time} key={time} />
      <h3>Max. value: {max}</h3>
      <Settings operators={operators} setOperators={setOperators} setTime={setTime} setMax={setMax} key={max} />
      <button id="start-button" onClick={() => setGameOn(!gameOn)}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question ops={operators} max={max} /> : null}
    </div>
  );
};
