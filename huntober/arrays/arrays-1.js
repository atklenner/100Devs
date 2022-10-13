// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

const arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const arr3 = [
  ["a", "B", "c"],
  ["d", "E", "f"],
  ["g", "H", "i"],
];
const arr4 = [
  ["a", "b", "c"],
  ["g", "h", "i"],
  ["d", "e", "f"],
];

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

function checkEquality(arr1, arr2) {
  let flatArr1 = arr1.flat();
  let flatArr2 = arr2.flat();
  return flatArr1.every((letter, index) => flatArr2[index] === letter);
}

console.log(checkEquality(arr1, arr2));
console.log(checkEquality(arr1, arr3));
console.log(checkEquality(arr1, arr4));
