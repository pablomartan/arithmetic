import React, { useState, useEffect } from 'react';

import { Question } from './Question';
import { Settings } from './Settings';
import { Timer } from './Timer';

import './Game.css';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operators, setOperators] = useState(['+']);
  const [time, setTime] = useState(300);
  const [max, setMax] = useState(20);
  const [score, setScore] = useState(0);

  const disableInputs = () => {
    const inputs = Array.from(document.getElementsByClassName('settings'));
    if (gameOn) {
      inputs.forEach(i => i.disabled = true);
    } else {
      inputs.forEach(i => i.disabled = false);
    }
  };

  const handleStart = () => {
    if (!gameOn) {
      if (score > 0) {
        setScore(0);
      }
      setGameOn(true);
    } else {
      setGameOn(false);
    }
  };

  useEffect(() => disableInputs());

  return(
    <div className="game">
      <div className="stats">
        <Timer gameOn={gameOn} setGameOn={setGameOn} time={time} key={time} />
        <h3>Max. value: {max}</h3>
        <h3>Your score: {score}</h3>
      </div>
      {
        !gameOn ? <Settings operators={operators} setOperators={setOperators} setTime={setTime} time={time} setMax={setMax} max={max} key={max} />
               : null
      }
      <button id="start-button" onClick={() => handleStart()}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question ops={operators} max={max} score={score} setScore={setScore} /> : null}
    </div>
  );
};
