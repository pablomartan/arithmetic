import React, { useState } from 'react';

export const Game = props => {

  const updateInput = (e, setUserInput) => {
    const input = e.target.value;
    setUserInput(input);
  };


  return(
    <div className="game">
      <p id="question">{props.question}</p>
      <input id="answer" onChange={e => props.setUserInput(e.target.value)} />
    </div>
  );
};
