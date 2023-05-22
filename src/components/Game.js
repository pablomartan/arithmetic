import React, { useState, useEffect } from 'react';

import { Question } from './Question';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);

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
    console.log(timer, timeLeft);
    if (timeLeft <= 0) {
      stopGame();
    }
  });

  return(
    <div className="game">
      <h2>{timeLeft}</h2>
      <button id="start-button" onClick={() => startStopButton()}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question /> : null}
    </div>
  );
};
