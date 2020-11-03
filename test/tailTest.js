const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"]; //test array

describe("#tail", () => {
  it("return Lighthouse, Labs", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("original array should still have 3 elements", () => {
    assert.deepEqual(words.length, 3);
  });
});