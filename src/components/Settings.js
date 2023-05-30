import React from 'react';
import { OperationSelector } from './OperationSelector'; 

import './Settings.css';

export const Settings = props => {
  const setMax = props.setMax;
  const setTime = props.setTime;

  const defaultTime = seconds => {
    let mins = Math.floor(seconds / 60);
    let sec = seconds % 60;
    
    return (mins < 10 ? '0'.concat(mins) : mins)
      + ':' + (sec < 10 ? '0'.concat(sec) : sec);
  };

  const updateTime = time => {
    const split = time.split(':');
    const sec = parseInt(split[0]) * 60 + parseInt(split[1]);
    setTime(sec);
  };

  return(
    <div id="settings">
      <OperationSelector operators={props.operators} setOperators={props.setOperators} />

      <div id="time-settings">
        <input
          className="settings"
          type="time"
          label="time-setting"
          id="time-input"
          defaultValue={defaultTime(props.time)}
        />

        <button onClick={() => {
          const time = document.getElementById('time-setting').value;
          updateTime(time);
        }}>Set time</button>
      </div>

      <div id="max-settings">
        <input
          className="settings"
          id="max-input"
          defaultValue={props.max}
        />
        <button onClick={e => {
          e.preventDefault();
          const max = document.getElementById('max-setting').value;
          setMax(max);
        }}>Set max. value</button>
      </div>
    </div>
  );
};
