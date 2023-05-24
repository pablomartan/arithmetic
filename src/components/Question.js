import React, { useState, useEffect } from 'react';

const randomOp = operatorArray => {
  const op = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  const a = Math.round(Math.random() * 20);
  const b = Math.round(Math.random() * 20);
 
  /*
   * took idea for division (reversed multiplication) from this webapp:
   * https://arithmetic.zetamac.com/
   */
  return op === '/' ? ''.concat(a*b, op, b)
                    : op === '-' && a < b ? ''.concat(b, op, a)
                    : ''.concat(a, op, b)
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
