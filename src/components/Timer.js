import React, { useState, useEffect } from 'react';

import { timeInMinutes } from '../helperFunctions';

export const Timer = props => {
  const setGameOn = props.setGameOn;
  const [timeLeft, setTimeLeft] = useState(props.time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        setGameOn(false);
      } else {
        setTimeLeft(timeLeft => timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return(
    <>
      <h3 id="timer">{timeInMinutes(timeLeft)}</h3>
    </>
  );
};
