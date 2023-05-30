import React from 'react';
import { OperatorCheck } from './OperatorCheck';

export const OperationSelector = props => {
  const [operators, setOperators] = [props.operators, props.setOperators];

  const addOperator = op => {
    !operators.includes(op) && setOperators([...operators, op]);
  };

  const rmOperator = op => {
    operators.includes(op) && setOperators(operators.filter(o => o !== op));
  };

  const operatorCheckBoxHandler = e => {
    const target = e.target;
    const op = target.id;
    target.checked ? addOperator(op) : rmOperator(op);
  };

  return(
    <div id="operation-selector">
      <OperatorCheck name="add" id="+" handler={operatorCheckBoxHandler} checked={true}/>
      <OperatorCheck name="sub" id="-" handler={operatorCheckBoxHandler} />
      <OperatorCheck name="mult" id="*" handler={operatorCheckBoxHandler} />
      <OperatorCheck name="div" id="/" handler={operatorCheckBoxHandler} />
    </div>
  )
};
