// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function normalize(arr) {
  // use reduce to find the average length of a string in the array
  let average = arr.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0) / arr.length;
  // then return the arr.map using string.repeat(average) for the map
  return arr.map((char) => char[0].repeat(Math.round(average)));
}
