import React, { useState, useEffect } from 'react';

import { randomOp } from '../helperFunctions';

export const Question = props => {
  const [question, setQuestion] = useState(randomOp(props.operations, props.max));
  const [userInput, setUserInput] = useState('');
  const setScore = props.setScore;

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (eval(question) === parseInt(userInput)) {
        setQuestion(randomOp(props.operations, props.max));
        setUserInput('');
        document.getElementById('answer').value = '';
        setScore(score => score + 1);
      }
    }, 300);

    return () => clearTimeout(timeOut);
  });

  return(
    <div id="question-div">
      <p id="question">{question.replace(/\*/, 'x')}</p>
      <input id="answer" onChange={e => handleInput(e)} />
    </div>
  );
};
