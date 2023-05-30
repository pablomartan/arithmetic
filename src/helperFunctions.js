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
