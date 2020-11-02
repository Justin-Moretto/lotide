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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [5, 5, 5]);
