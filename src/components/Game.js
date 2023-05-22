import React, { useState, useEffect } from 'react';

import { Question } from './Question';
import { Settings } from './Settings';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);
  const [operators, setOperators] = useState(['+']);

  const startStopButton = () => {
    if (!gameOn) {
      startGame();
    } else {
      stopGame();
    }
  };

  const startGame = () => {
    setGameOn(true);
    setTimer(setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000));
  };

  const stopGame = () => {
    setGameOn(false);
    clearInterval(timer);
    setTimer(null);
    setTimeLeft(300);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      stopGame();
    }
  });

  return(
    <div className="game">
      <h2>{timeLeft}</h2>
      <Settings operators={operators} setOperators={setOperators} setTimeLeft={setTimeLeft} />
      <button id="start-button" onClick={() => startStopButton()}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question ops={operators} /> : null}
    </div>
  );
};
