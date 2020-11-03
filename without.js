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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let match = false; //bool to see if an index of source can be found in itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (!match) {
      newArray.push(source[i]);
    }
  }
  //console.log(newArray);
};

//test case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;