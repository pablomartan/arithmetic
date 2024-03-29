/**
 * @description: converts a number in seconds into a string formatted as MM:SS
 * @param {Number} sec: the number of seconds
 *
 * @returns {String} with format MM:SS
 */
export const timeInMinutes = time => {
  let mins = Math.floor(time / 60);
  let sec = Math.round(time % 60);
  
  return (mins < 10 ? '0'.concat(mins) : mins)
    + ':' + (sec < 10 ? '0'.concat(sec) : sec);
};

/**
 * @description: converts a string with format MM:SS to a number of seconds
 * @param {String} time: the time to convert
 *
 * @returns {Number} the time in seconds
 */
export const timeInSeconds = time => {
  const mins = parseInt(time.substring(0, 2));
  const sec = parseInt(time.substring(3));
  return mins * 60 + sec;
};

/**
 * @description: returns a random operation from the given operations array, with the
 * operands max value being determined by the max param
 * @param {Array} operations: the avaliable operations (+, -, *, /)
 * @param {Number} max: the maximum value, except for division, which is
 * reversed multiplication and so can be a number up to max*max
 *
 * @returns {String} question: the operation to be performed by the player 
 */
export const randomOp = (operatorArray, max) => {
  const op = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  const a = Math.round(Math.random() * (max - 1)) + 1;
  const b = Math.round(Math.random() * (max - 1)) + 1;
 
  /*
   * took idea for division (reversed multiplication) from this webapp:
   * https://arithmetic.zetamac.com/
   */
  return op === '/'
    ? ''.concat(a*b, op, b)
    : op === '-' && a < b
      ? ''.concat(b, op, a)
        : op === undefined
        ? ''.concat(a, '+', b)
        : ''.concat(a, op, b)
};

/**
 * @description: given an array of arithmetic operation names, returns a string
 * with the operation symbols
 * @param {Array} names: the names of the operations
 *
 * @returns {Array} an array of strings with the operation symbols
 */
export const getOperationSymbols = names => {
  const lookUp = {
    'add': '+',
    'sub': '-',
    'mult': '*',
    'div': '/'
  }

  return names.map(o => lookUp[o]);
};

/**
 * @description: checks if user set time is given in the correct parameters
 * @param {String} time: user set time
 *
 * @returns a boolean: false if seconds or minutes > 60, true otherwise
 */
export const validateTime = time => {
  const arr = time.split(':');
  const min = parseInt(arr[0]);
  const sec = parseInt(arr[1]);

  return min >= 0 && min <= 60 && sec >= 0 && sec <= 60;
};

/**
 * @description: checks if max value is valid
 * @param {Number} num: the number introduced by the user
 *
 * @returns a boolean
 */
export const validateMaxValue = num => {
  return num > 0;
};
