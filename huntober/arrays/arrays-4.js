let myGrid = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

// call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

function moveUp(value, arr) {
  arr.forEach((row, index) => {
    if (row.includes(value) && index >= 1) {
      let column = row.indexOf(value);
      let valueToBeSwapped = arr[index - 1][column];
      arr[index][column] = valueToBeSwapped;
      arr[index - 1][column] = value;
    }
  });
  return arr;
}

function moveDown(value, arr) {
  arr.forEach((row, index) => {
    if (row.includes(value) && index < arr.length - 1) {
      let column = row.indexOf(value);
      let valueToBeSwapped = arr[index + 1][column];
      arr[index][column] = valueToBeSwapped;
      arr[index + 1][column] = value;
    }
  });
  return arr;
}

moveUp("h", myGrid);
console.log(myGrid);
moveUp("h", myGrid);
console.log(myGrid);
moveUp("h", myGrid);
console.log(myGrid);
moveDown("f", myGrid);
console.log(myGrid);
moveDown("f", myGrid);
console.log(myGrid);
