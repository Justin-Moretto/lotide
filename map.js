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
///-------------map--------------------------

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//test
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(map(words, word => word[word.length - 1]));
console.log(map(words, word => word + "ino"));
console.log(map(words, word => word.length));

module.exports = map;