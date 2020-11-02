const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;

