// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// Array contains strings and numbers
// are these numbers integers only? Could they be floats as well?
// are these strings easily converted to numbers? Is there any case where we get NaN

// Return the sum of those integers, we are returning an integer

// Examples
// sumMix([2, 3, 5]) === 10
// sumMix(["2", "3", "5"]) === 10
// sumMix([2, 3, "5"]) === 10

function sumMix(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(sumMix([2, 3, 5]) === 10);
console.log(sumMix(["2", "3", "5"]) === 10);
console.log(sumMix([2, 3, "5"]) === 10);
