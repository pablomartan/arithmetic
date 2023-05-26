import React from 'react';
import { OperatorCheck } from './OperatorCheck';

export const OperationFieldset = props => {
  const [operators, setOperators] = [props.operators, props.setOperators];

  const addOperator = op => {
    opArr.includes(op) ? null : setOps([...opArr, op]);
  };

  const rmOperator = op => {
    !opArr.includes(op) ? null : setOps(opArr.filter(o => o !== op));
  };

  const operatorCheckBoxHandler = e => {
    const target = e.target;
    const op = target.id;
    target.checked ? addOperator(op) : rmOperator(op);
  };

  return(
    <fieldset id="operation-selector">
      <legend>Choose operations</legend>
      <OperatorCheck name="add" id="+" handler={operatorCheckBoxHandler} checked />
      <OperatorCheck name="sub" id="-" handler={operatorCheckBoxHandler} />
      <OperatorCheck name="mult" id="*" handler={operatorCheckBoxHandler} />
      <OperatorCheck name="div" id="/" handler={operatorCheckBoxHandler} />
    </fieldset>
  )
};
