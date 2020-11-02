const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  let output = [];
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return output;
  } else if (array.length % 2 === 0) { //is array length even number?
    output.push(array[mid - 1]);
    output.push(array[mid]);
  } else { //it is an odd number
    output.push(array[mid]);
  }
  return output;
};

module.exports = middle;