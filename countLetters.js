const args = process.argv[2];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(input) {
  let string = input.split(" ").join(""); //remove spaces
  let output = {}; //output will be an object
  for (let i of string) {
    if (output[i] === 1) {
      output[i]++;
    } else {
      output[i] = 1;
    }
  }
  return output;
};

//test
console.log(countLetters(args));