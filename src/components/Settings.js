import React from 'react';

export const Settings = props => {
  const setTime = props.setTimeLeft;
  const opArr = props.operators;
  const setOps = props.setOperators;

  const addOperator = op => {
    opArr.includes(op) ? null : setOps([...opArr, op]);
  };

  const rmOperator = op => {
    !opArr.includes(op) ? null : setOps(opArr.filter(o => o === op));
  };

  const operatorCheckBoxHandler = e => {
    const target = e.target;
    const op = target.id;
    target.checked ? addOperator(op) : rmOperator(op);
  };

  return(
    <>
      <fieldset>
        <legend>Choose operations</legend>
        <input
          type="checkbox"
          name="sum-check"
          id="+"
          onClick={e => operatorCheckBoxHandler(e)}
          defaultChecked
        />
        <label htmlFor="sum-check">Addition</label>
        
        <input
          type="checkbox"
          name="sub-check"
          id="-"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="sub-check">Subtraction</label>

        <input
          type="checkbox"
          name="div-check"
          id="/"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="div-check">Division</label>

        <input
          type="checkbox"
          name="mult-check"
          id="*"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="sub-check">Multiplication</label>
      </fieldset>
    </>
  );
};
