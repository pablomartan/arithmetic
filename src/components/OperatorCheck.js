import React from 'react';

export const OperatorCheck = props => {
  const [name, id, clickHandler] = [props.name, props.id, props.handler];

  return(
    <>
      <input type="checkbox" name={name} id={id} onClick={e => clickHandler(e)} />
      <label htmlFor={name}>{name}</label>
    </>
  );
};
