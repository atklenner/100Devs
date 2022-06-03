// Looping a Triangle
let string = "";
for (let i = 0; i < 7; i++) {
  string += "#";
  console.log(string);
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    }
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Chessboard
for (let i = 0; i < 8; i++) {
  let string = "";
  for (let j = 0; j < 8; j++) {
    if (j % 2 === 0) {
      string += "#";
    } else string += " ";
  }
  if (i % 2 === 0) {
    string = " " + string;
  } else {
    string += " ";
  }
  console.log(string);
}
