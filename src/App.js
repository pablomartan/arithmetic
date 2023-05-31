import React, { useState } from 'react';

import { Settings } from './components/Settings';
import { Timer } from './components/Timer';
import { Question } from './components/Question';
import { getOperationSymbols, timeInSeconds } from './helperFunctions';

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
    if (!gameOn) {
      const inputs = Array.from(document.getElementsByTagName('input'));
      const checkBoxes = inputs.filter(input => input.type == 'checkbox');
      const selectedOperations = checkBoxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.id);
      setOperations(getOperationSymbols(selectedOperations));

      const time = inputs.filter(input => input.id == 'time-input')[0].value;
      setTime(timeInSeconds(time));

      const max = inputs.filter(input => input.id == 'max-input')[0].value;
      setMax(max);
    }

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
