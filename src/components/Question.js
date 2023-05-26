import React, { useState, useEffect } from 'react';

import './Question.css';

const randomOp = (operatorArray, max) => {
  const op = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  const a = Math.round(Math.random() * (max - 1)) + 1;
  const b = Math.round(Math.random() * (max - 1)) + 1;
 
  /*
   * took idea for division (reversed multiplication) from this webapp:
   * https://arithmetic.zetamac.com/
   */
  return op === '/' ? ''.concat(a*b, op, b)
                    : op === '-' && a < b ? ''.concat(b, op, a)
                    : ''.concat(a, op, b)
};

export const Question = props => {
  const [question, setQuestion] = useState(randomOp(props.ops, props.max));
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = [props.score, props.setScore];

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  console.log(props.max);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (eval(question) === parseInt(userInput)) {
        setQuestion(randomOp(props.ops, props.max));
        setUserInput('');
        document.getElementById('answer').value = '';
        setScore(score => score + 1);
      }
    }, 300);

    return () => clearTimeout(timeOut);
  });

  return(
    <div id="question-div">
      <p id="question">{question}</p>
      <input id="answer" onChange={e => handleInput(e)} />
    </div>
  );
};
