import React from 'react';

import { OperationCheckBox } from './OperationCheckBox';

export const OperationSelector = () => {
  const operationLabels = ['Add.', 'Sub.', 'Mult.', 'Div.'];

  return(
    <div id="operation-selector">
      {operationLabels.map((op, i) => {
        return (<OperationCheckBox label={op} key={i} />);
      })}
    </div>
  )
};
