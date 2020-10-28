const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ Assertion Failed: ${actual} === ${expected}`);
  }
};






const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj); //turn objects keys to array, to do a for of loop
  for (let key of keys) {
    //console.log(obj[key]); each iteration returns the value of obj's keys
    if (obj[key] === val) { //if it's the one we want
      return key;  //return that key
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);