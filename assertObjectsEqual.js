
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let pass = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    if (!(arr1[i] === arr2[i])) { //if the values at equal indexes of both arrays are not the same
      return false;
    }
  }
  //console.log(pass);
  return pass;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); //create arrays of the objects keys
  const keys2 =  Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  let match = true;
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      if (!eqArrays(object1[key], object2[key])) {
        match = false;
      }
    }
  }
  return match;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected) === true) {
    console.log(`✔️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`✖️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba)

module.exports = assertObjectsEqual;