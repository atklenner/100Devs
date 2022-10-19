// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

// given and array of integers
// will it always be an integer? could it be a float? or another data type? negative values? 0?

// return an integer
// Math.floor(int)

function getAverage(arr) {
  // use reduce to find the sum of the entries in the array
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  // divide the sum by arr.length
  let score = sum / arr.length;
  // then get the integer component using Math.floor()
  let finalScore = Math.floor(score);
  // return that integer component
  return finalScore;
}

console.log(getAverage([2, 2, 2, 2]) === 2);
console.log(getAverage([1, 2, 3, 4, 5]) === 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]) === 1); // shows the Math.floor() works
console.log(getAverage([1, 1, 0]) === 0);
