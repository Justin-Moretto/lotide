
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
    if (!(arr1[i] === arr2[i])) { //if the values at equal indexes of both arrays are not the same
      pass = false;
      break;
    }
  }
  //console.log(pass);
  return pass;
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS