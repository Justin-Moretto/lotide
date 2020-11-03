
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let [letter] = sentence[i];
    if (results[letter]) { //is this a letter we're tracking?
      results[letter].push((i));// is so, track it's position
    } else {  //if not
      results[letter] = []; //create an array to track if first
      results[letter].push(i);
    }
  }
  return results;
};

//test
console.log(letterPositions("hello"));

module.exports = letterPositions;