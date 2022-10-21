// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

// given an array of length at least 2, assuming they are all non-negative integers, though they don't have to be, any number is fine
// what about the case where there is only one number that occurs once, or the array contains a string or other type than number

// return a number, the sum of the two unique numbers

function repeats(arr) {
  // reduce the array into a map
  let map = arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur]++;
    }
    return acc;
  }, {});
  // keep track of a sum
  let sum = 0;
  // loop through the map keys
  for (let value in map) {
    if (map[value] === 1) sum += Number(value);
  }
  // if the value of the key is 1 then add Number(key) to the sum
  return sum;
}

console.log(repeats([4, 5, 7, 5, 4, 8]) === 15);
console.log(repeats([9, 10, 19, 13, 19, 13]) === 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]) === 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]) === 22);
console.log(repeats([5, 10, 19, 13, 10, 13]) === 24);

function repeats2(arr) {
  return arr
    .filter((value) => arr.indexOf(value) === arr.lastIndexOf(value))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(repeats2([4, 5, 7, 5, 4, 8]) === 15);
console.log(repeats2([9, 10, 19, 13, 19, 13]) === 19);
console.log(repeats2([16, 0, 11, 4, 8, 16, 0, 11]) === 12);
console.log(repeats2([5, 17, 18, 11, 13, 18, 11, 13]) === 22);
console.log(repeats2([5, 10, 19, 13, 10, 13]) === 24);
