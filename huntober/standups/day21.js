// Given a string of characters as input, write a function that returns 
// it with the characters reversed. No Reverse Method (well brute force 
// it first, but then no reverse method)!

// "abc" => "cba"

function reverseString(str) {
  // declare an empty string
  let reversed = "";
  // c-style for loop going from the end of the string to the start
  for (let i = str.length - 1; i >= 0; i--) {
    // add the letters to the string
    reversed += str[i];
  }
  // return the reversed string
  return reversed;
}

console.log(reverseString("abc"));
