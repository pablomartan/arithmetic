import React, { useState, useEffect } from 'react';

const randomOp = operatorArray => {
  const op = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  return ''.concat(Math.round(Math.random() * 20), op, Math.round(Math.random() * 20));
};

export const Question = props => {
  const [question, setQuestion] = useState(randomOp(props.ops));
  const [userInput, setUserInput] = useState('');

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (eval(question) === parseInt(userInput)) {
        setQuestion(randomOp(props.ops));
        setUserInput('');
        document.getElementById('answer').value = '';
      }
    }, 300);

    return () => clearTimeout(timeOut);
  });

  return(
    <>
      <p id="question">{question}</p>
      <input id="answer" onChange={e => handleInput(e)} />
    </>
  );
};
