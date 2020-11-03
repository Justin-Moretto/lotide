
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

//tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;
