// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// "abc" => { "a": 1, "b": 1, "c": 1 }
// "aaabbc" => { "a": 3, "b": 2, "c": 1 }
// "" => {}

function count(string) {
  // turn string into array
  // reduce the array
  // check if the letter is in an object
  // if not initialize it
  // then add 1 to the count
  // return the object
  return string.split("").reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    acc[cur] = acc[cur] + 1;
    return acc;
  }, {});
}
