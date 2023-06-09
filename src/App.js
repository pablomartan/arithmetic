import React, { useState } from 'react';

import { Settings } from './components/Settings';
import { Timer } from './components/Timer';
import { Question } from './components/Question';
import { Instructions } from './components/Instructions';
import { getOperationSymbols, timeInSeconds, validateTime, validateMaxValue } from './helperFunctions';

import './App.css';
import './StartStop.css';
import './Score.css';
import './Stats.css';

export const App = () => {
  const [firstRun, setFirstRun] = useState(true);
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
      validateTime(time) && setTime(timeInSeconds(time));

      const max = inputs.filter(input => input.id == 'max-input')[0].value;
      validateMaxValue(max) && setMax(max);

      setScore(0);
    }

    setGameOn(!gameOn);
  };

  return(
    <>
      {firstRun && <Instructions setFirstRun={setFirstRun}/>}
      {!gameOn && <Settings time={time} max={max} />}
      <div id='stats'>
        {gameOn && <Timer time={time} setGameOn={setGameOn} />}
        {(gameOn || score > 0) && <h3 id='score'>{score}</h3>}
        <button id='start-stop' onClick={() => handleStartButton()}>{gameOn ? 'Stop' : 'Start'}</button>
      </div>
      {gameOn && <Question operations={operations} max={max} setScore={setScore} />}
    </>
  );
};
