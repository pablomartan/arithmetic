import React, { useState } from 'react';

import { Game } from './components/Game';

const randomOp = operator => {
  return ''.concat(Math.round(Math.random() * 20), operator, Math.round(Math.random() * 20));
};


export const App = props => {
  const [gameOn, setGameOn] = useState(false);
  const [question, setQuestion] = useState(randomOp('+'));
  const [userInput, setUserInput] = useState('');

  const rightAnswer = (question, userInput) => {
    const newQuestion = question;
    if (eval(question) === parseInt(userInput)) {
      setTimeout(() => {
        setQuestion(randomOp('+'));
        setUserInput('');
        document.getElementById('answer').value = '';
      }, 500);
    }

    return newQuestion;
  };
  
  return(
    <div>
      <h1>This is a simple math game</h1>
      <h2>Game is {gameOn ? 'on' : 'off' }</h2>
      <button onClick={() => setGameOn(!gameOn)}>{gameOn ? 'Stop' : 'Start'}</button>
      {gameOn ? <Game question={rightAnswer(question, userInput)} setUserInput={setUserInput} /> : null}
    </div>
  );
};
