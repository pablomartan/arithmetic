import React, { useState, useEffect } from 'react';

export const Timer = props => {
  const [gameOn, setGameOn] = [props.gameOn, props.setGameOn];
  const [timeLeft, setTimeLeft] = useState(props.time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        setGameOn(false);
      } else if (gameOn) {
        setTimeLeft(timeLeft => timeLeft - 1);
      }
    }, 1000);

    if (!gameOn) {
      setTimeLeft(props.time);
    }

    return () => clearInterval(interval);
  });

  const timeInMinutes = time => {
    let mins = Math.floor(time / 60);
    let sec = Math.round(time % 60);
    
    return (mins < 10 ? '0'.concat(mins) : mins)
      + ':' + (sec < 10 ? '0'.concat(sec) : sec);
  };

  return(
    <>
      <h3 id="timer">{timeInMinutes(timeLeft)}</h3>
    </>
  );
};
