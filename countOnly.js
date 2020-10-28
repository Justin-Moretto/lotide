const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ Assertion Failed: ${actual} === ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let i of allItems) { //loop through all items
    if (itemsToCount[i]) { //check if this item is on the ToCount list with value of "true"
      if (output[i] === 1) {
        output[i]++;
      } else {
        output[i] = 1;
      }
    }
  }
  return output;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);