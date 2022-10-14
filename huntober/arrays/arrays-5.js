let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function myShuffle(arr) {
  let values = arr.flat();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let random = Math.floor(Math.random() * values.length);
      arr[i][j] = values[random];
      values = values.filter((value) => value !== values[random]);
    }
  }
  return arr;
}

// amazingly, I wrote the Fisher-Yates Shuffle completely independently here

console.log(myShuffle(myArray));
