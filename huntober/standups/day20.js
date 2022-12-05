// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; when it’s 
// divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, 
// print out “Fizz Buzz”.

// examples:
// n = 2 => 1, "Fizz"
// n = 3 => 1, "Fizz", "Buzz"
// n = 6 => 1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz"

function fizzBuzz(n) {
  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      // if i is divisible by both 2 and 3 print "Fizz Buzz"
      console.log("Fizz Buzz");
    } else if (i % 2 === 0) {
      // else if it is divisible by 2 print "Fizz"
      console.log("Fizz");
    } else if (i % 3 === 0) {
      // else if it is divisible by 3 print "Buzz"
      console.log("Buzz");
    } else {
      // else print i
      console.log(i);
    }
  }
}

fizzBuzz(2);
fizzBuzz(3);
fizzBuzz(6);
