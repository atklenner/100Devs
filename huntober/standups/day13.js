// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

// filter?

// [1,2,3,4,5] - [2, 3] => [1,4,5]
// [] - [2,3] => []
// [1,2,3,4,5] - [] => [1,2,3,4,5]
// assuming arrays that just contain numbers, but that doesn't really matter too much

function arrayDiff(a, b) {
  // filter array a
  // if array b includes the value from array a return false
  // else return true
  // return the filtered array
  return a.filter((value) => {
    if (b.includes(value)) return false;
    return true;
  });
}
