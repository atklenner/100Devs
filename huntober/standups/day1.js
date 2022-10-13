function fizzbuzz(n) {
  if (n < 1) {
    throw new Error("number must be 1 or larger");
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("Fizz Buzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}

// fizzbuzz(0); // number must be 1 or larger

// fizzbuzz(3); // fizz

// fizzbuzz(5); // fizz, buzz

// fizzbuzz(15); // fizz, buzz, fizz, fizz, buzz, fizz, fizzbuzz

// check if number is positive
// loop through from 1 to number
// if number is divisible by three
// see if number is divisible by 5
// then print Fizz Buzz
// else print Fizz
// then check if the number is divisible my 5
// print Buzz if yes
// anything else will be ignored
