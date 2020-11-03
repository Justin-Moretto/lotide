const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("return empty array when given an array of length 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("return empty array when given an array of length 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return middle value if array length is odd (3)", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return middle value if array length is odd (5)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return two middle values if array length is even (4)", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("return two middle values if array length is even (6)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});