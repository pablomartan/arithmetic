import React, { useState } from 'react';

export const App = () => {
  const [gameOn, setGameOn] = useState(false);
  const [operations, setOperations] = useState(['+']);
  const [time, setTime] = useState(300);
  const [max, setMax] = useState(20);
  const [score, setScore] = useState(0);

  return(
    <>
      <Settings time={time} max={max} />
      <Timer time={time} setGameOn={setGameOn} />
      {/* Score */}
      {/* Question */}
    </>
  );
};
