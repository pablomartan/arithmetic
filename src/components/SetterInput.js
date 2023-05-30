import React from 'react';

export const SetterInput = props => {
  const [value, id, label] = [props.value, props.id, props.label];

  const type = id == 'max' ? 'number' : 'text';

  return(
    <div id={`${id}-settings`}>
      <label htmlFor={`${id}-input`}>
        {label}
      </label>
      <input
        id={`${id}-input`}
        name={`${id}-input`}
        type={type}
        minLength='1'
        maxLength='5'
        defaultValue={value}
      />
    </div>
  );
};
