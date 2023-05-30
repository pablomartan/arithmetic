import React from 'react';

export const SetterInput = props => {
  const [value, id, label] = [props.value, props.id, props.label];

  const type = id == 'max' ? 'number' : 'text';

  const inputAttributes = {
    id: `${id}-input`,
    name: `${id}-input`,
    type: type,
    defaultValue: value
  }

  if (type === 'text') {
    inputAttributes.pattern = '^[\\d]{2}:[\\d]{2}';
  } else if (type === 'number') {
    inputAttributes.min = '1';
  }

  return (
    <div id={`${id}-settings`}>
      <label htmlFor={`${id}-input`}>
        {label}
      </label>
      <input {...inputAttributes} />
    </div>
  );
};
