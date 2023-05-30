import React from 'react';

import { OperationSelector } from './OperationSelector';
import { SetterInput } from './SetterInput';

export const Settings = props => {
  const [time, max] = [props.time, props.max];

  return(
    <div id='settings'>
      <OperationSelector /> 
      <SetterInput id='time' label='Set duration:' value={time} /> 
      <SetterInput id='max'label='Set biggest value:' value={max} />
    </div>
  );
};
