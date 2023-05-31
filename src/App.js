import React, { useState } from 'react';

import { Settings } from './components/Settings';
import { Timer } from './components/Timer';
import { Question } from './components/Question';

export const App = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operations, setOperations] = useState(['+']);
  const [time, setTime] = useState(60);
  const [max, setMax] = useState(20);
  const [score, setScore] = useState(0);

  /**
   * @description: handles the start and stop of the game
   */
  const handleStartButton = () => {
    setGameOn(!gameOn);
  };

  return(
    <>
      {!gameOn && <Settings time={time} max={max} />}
      {gameOn && <Timer time={time} setGameOn={setGameOn} />}
      {gameOn || score > 0 && <h3 id='score'>{score}</h3>}
      <button id='start-stop' onClick={e => handleStartButton()}>{gameOn ? 'Stop' : 'Start'}</button>
      {gameOn && <Question operations={operations} max={max} setScore={setScore} />}
    </>
  );
};
