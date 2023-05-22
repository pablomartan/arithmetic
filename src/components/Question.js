import React, { useState, useEffect } from 'react';

const randomOp = operator => {
  return ''.concat(Math.round(Math.random() * 20), operator, Math.round(Math.random() * 20));
};

export const Question = () => {
  const [question, setQuestion] = useState(randomOp('+'));
  const [userInput, setUserInput] = useState('');

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  const checkAnswer = (question, answer) => {
    if (eval(question) === parseInt(answer)) {
      setTimeout(() => {
        setQuestion(randomOp('+'));
        setUserInput('');
        document.getElementById('answer').value = '';
      }, 300);
    }
  };

  useEffect(() => checkAnswer(question, userInput));

  return(
    <>
      <p id="question">{question}</p>
      <input id="answer" onChange={e => handleInput(e)} />
    </>
  );
};
