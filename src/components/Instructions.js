import React from 'react';

export const Instructions = props => {
  
  return(
    <div id='instructions'>
      <div id='instr-text'>
        <h2>Instructions</h2>
        <ul>
          <li>
            Checkboxes: choose operations (addition, subtraction, multiplication,
            division).
          </li>
          <li>
            Set duration: choose for how long you want to play (max 60:60); if the
            time you set is invalid, the default will be set.
          </li>
          <li>
            Set biggest number: set the biggest number you want to appear (must
            be bigger than 0). Divisions have larger numbers to make sure they
            are divisible (and the answer will never be a decimal). Check the
            code at <a
            href='https://github.com/pablomartan/arithmetic/blob/master/src/helperFunctions.js'
            target='_blank'>
              github</a> to see how it works.
          </li>
          <li>
            You'll have to close this instructions manually
          </li>
        </ul>
      </div>
      <button onClick={() => props.setFirstRun(false)}>Close</button>
    </div>
  );
};
