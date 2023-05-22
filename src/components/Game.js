import React, { useState } from 'react';

const randomOp = operator => {
  return ''.concat(Math.round(Math.random() * 20), operator, Math.round(Math.random() * 20));
};

export const Game = () => {
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

  const updateInput = (e, setUserInput) => {
    const input = e.target.value;
    setUserInput(input);
  };


  return(
    <div className="game">
      <button id="start-button" onClick={() => setGameOn(!gameOn)}>{gameOn ? 'Stop' : 'Start'}</button>
      <p id="question">{rightAnswer(question, userInput)}</p>
      <input id="answer" onChange={e => setUserInput(e.target.value)} />
    </div>
  );
};
