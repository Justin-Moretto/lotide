const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([1, 2, 3], [5, 5, 5]); //fail