// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// input: array of three numbers, the numbers are distinct so there will always be a middle number
// output: return the index of the middle number, which since it is a triplet will be 0, 1, or 2

// [1,2,3] => 1
// [2,1,3] => 0
// [1,3,2] => 2

function gimme(triplet) {
  // make a copy of the triplet and sort it
  // take the middle value of the copy
  // find the index of the middle value in the triplet
  // return that index
  let sorted = [...triplet].sort((a, b) => b - a);
  let middleVal = sorted[1];
  let index = triplet.indexOf(middleVal);
  return index;
}
