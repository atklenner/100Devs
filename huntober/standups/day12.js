// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// input: sorted array, an array that is both mixed and might be missing a value
// return: the missing value, or if there is no missing value, return 0

function findDeletedNumber(arr, mixArr) {
  // use guard clause to check if both arrays are the same length, if yes return 0;
  if (arr.length === mixArr.length) return 0;
  // if mixArr is empty then return the single value from arr
  if (mixArr.length === 0) return arr[0];
  // otherwise sort the mixed array
  mixArr.sort((a, b) => a - b);
  // compare them with a for loop
  for (let i = 0; i < mixArr.length; i++) {
    // when one value is different
    if (mixArr[i] !== arr[i]) {
      // return the missing value
      return arr[i];
    }
  }
  // in the case where the last element of arr is removed, return that element
  return arr[arr.length - 1];
}
