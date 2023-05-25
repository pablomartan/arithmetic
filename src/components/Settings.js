import React from 'react';

export const Settings = props => {
  const setMax = props.setMax;
  const setTime = props.setTime;
  const opArr = props.operators;
  const setOps = props.setOperators;

  const addOperator = op => {
    opArr.includes(op) ? null : setOps([...opArr, op]);
  };

  const rmOperator = op => {
    !opArr.includes(op) ? null : setOps(opArr.filter(o => o !== op));
  };

  const operatorCheckBoxHandler = e => {
    const target = e.target;
    const op = target.id;
    target.checked ? addOperator(op) : rmOperator(op);
  };

  const updateTime = time => {
    const split = time.split(':');
    const sec = parseInt(split[0]) * 60 + parseInt(split[1]);
    console.log(sec);
    setTime(sec);
  };

  return(
    <>
      <fieldset>
        <legend>Choose operations</legend>
        <input
          className="settings"
          type="checkbox"
          name="sum-check"
          id="+"
          onClick={e => operatorCheckBoxHandler(e)}
          defaultChecked
        />
        <label htmlFor="sum-check">Addition</label>
        
        <input
          className="settings"
          type="checkbox"
          name="sub-check"
          id="-"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="sub-check">Subtraction</label>

        <input
          className="settings"
          type="checkbox"
          name="div-check"
          id="/"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="div-check">Division</label>

        <input
          className="settings"
          type="checkbox"
          name="mult-check"
          id="*"
          onClick={e => operatorCheckBoxHandler(e)}
        />
        <label htmlFor="sub-check">Multiplication</label>
      </fieldset>

      <input
          className="settings"
        type="time"
        label="time-setting"
        id="time-setting"
      />

      <button onClick={() => {
        const time = document.getElementById('time-setting').value;
        updateTime(time);
      }}>Set time</button>

      <input
        className="settings"
        id="max-setting"
      />
      <button onClick={() => {
        const max = document.getElementById('max').value;
        setMax(max);
      }}>Set max. value</button>
    </>
  );
};
