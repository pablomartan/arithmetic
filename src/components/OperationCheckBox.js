import React from 'react';

export const OperationCheckBox = props => {
  const label = props.label;
  const checked = label === 'Add.';
  const name = label.toLowerCase().replace(/\./g, '');

  return(
    <div className="operation-checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={checked}
      />
      <label htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
