import React, { useState } from 'react';

import { Question } from './Question';

export const Game = () => {
  const [gameOn, setGameOn] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(300);

  return(
    <div className="game">
      <button id="start-button" onClick={() => setGameOn(!gameOn)}>
        {gameOn ? 'Stop' : 'Start'}
      </button>
      {gameOn ? <Question /> : null}
    </div>
  );
};
