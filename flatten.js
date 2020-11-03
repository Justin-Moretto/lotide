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

const flatten = function(input) {
  let newArray = [];
  for (let i = 0; i < input.length ; i++) {
    if (Array.isArray(input[i])) {
      for (j of input[i]) {
        newArray.push(j);
      }
    } else {
      newArray.push(input[i]);
    }
  }
  return newArray;
};

//test case
console.log(flatten([1, 2, [3, 4], 5, [6, 7]]));

module.exports = flatten;