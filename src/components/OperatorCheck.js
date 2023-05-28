import React from 'react';

export const OperatorCheck = props => {
  const [name, id, clickHandler, checked] = [props.name, props.id, props.handler, props.checked];

  return(
    <>
      <input type="checkbox" name={name} id={id} onClick={e => clickHandler(e)} defaultChecked={checked} />
      <label htmlFor={name}>{name}</label>
    </>
  );
};
