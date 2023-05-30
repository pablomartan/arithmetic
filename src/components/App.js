import React, { useState } from 'react';

import { Settings } from './Settings';
import { Timer } from './Timer';
import { Question } from './Question';

export const App = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operations, setOperations] = useState(['+']);
  const [time, setTime] = useState(60);
  const [max, setMax] = useState(20);
  const [score, setScore] = useState(0);

  return(
    <>
      <Settings time={time} max={max} />
      <Timer time={time} setGameOn={setGameOn} />
      {gameOn || score > 0 && <h3 id='score'>{score}</h3>}
      <Question operations={operations} max={max} setScore={setScore} />
    </>
  );
};
