// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
//
// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr, target) {
  let pairs = [];
  let map = {};
  for (let value of arr) {
    if (target - value in map) {
      pairs.push([target - value, value]);
    }
    map[value] = true;
  }
  return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4));
