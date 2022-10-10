myArray = ["abc", "xyz", 1, 2, "Hey!"];

function moveLeft(arr, value) {
  let index = arr.indexOf(value);
  if (index === 0) return arr;
  let movedValue = arr[index - 1];
  arr[index] = movedValue;
  arr[index - 1] = value;
  return arr;
}

function moveRight(arr, value) {
  let index = arr.indexOf(value);
  if (index === arr.length - 1) return arr;
  let movedValue = arr[index + 1];
  arr[index] = movedValue;
  arr[index + 1] = value;
  return arr;
}

moveLeft(myArray, "xyz");
// call move left function with 'xyz' and myArray as arguments
console.log(myArray); // ['xyz', 'abc', 1, 2, 'Hey!']

moveLeft(myArray, "xyz");
// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray); // ['xyz', 'abc', 1, 2, 'Hey!'] no change

moveRight(myArray, 2);
// call move right function this time, with 2 and myArray as arguments
console.log(myArray); // ['xyz', 'abc', 1, 'Hey!', 2]

moveRight(myArray, 2);
// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray); // ['xyz', 'abc', 1, 'Hey!', 2] no change
