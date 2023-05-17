import React, { useState } from 'react';

import { Game } from './components/Game';

const randomSum = () => {
  return ''.concat(Math.round(Math.random() * 20), '+', Math.round(Math.random() * 20));
};


export const App = props => {
  const [gameOn, setGameOn] = useState(false);
  const [question, setQuestion] = useState(randomSum());
  const [userInput, setUserInput] = useState('');

  const rightAnswer = (question, userInput) => {
    const newQuestion = question;
    if (eval(question) === parseInt(userInput)) {
      setTimeout(() => {
        setQuestion(randomSum());
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
