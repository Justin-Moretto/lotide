const eqArrays = function(arr1, arr2) {
  let pass = true;
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] === arr2[i])) { //if the values at equal indexes of both arrays are not the same
      pass = false;
      break;
    }
  }
  //console.log(pass);
  return pass;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✔️ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`✖️ Assertion Failed: ${arr1} === ${arr2}`);
  }
};

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

// TEST CODE
//console.log(middle([1, 2, 3, 4, 5]));
//console.log(middle([1, 2, 3, 4, 5, 6]));
//console.log(middle([1, 2]));