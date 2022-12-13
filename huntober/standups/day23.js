// Given a string of characters, return the character that appears the most often.
//
// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });
//
// No String or Array Methods (well brute force it first, but then no methods)!

// "Hello World!" => "l"
// "abc" => ???
// "aabc" => "a"
//

function max(str) {
  // count the number of chars in str and store the value in an object
  // create an empty object
  let map = {};
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // if the letter is not a key in map, initialize it to zero
    if (!map[str[i]]) {
      map[str[i]] = 0;
    }
    // add 1 to the letter count
    map[str[i]] += 1;
  }
  // keep track of both the max count and the letter with the max count
  let maxCount = 0;
  let maxLetter = "";
  // loop through each key in the object
  for (let letter in map) {
    // compare each count with max count
    if (map[letter] > maxCount) {
      // if it is greater replace both maxCount and maxLetter
      maxCount = map[letter];
      maxLetter = letter;
    }
  }
  // return the maxLetter
  return maxLetter;
}

console.log(max("Hello World"));
console.log(max("aabc"));
