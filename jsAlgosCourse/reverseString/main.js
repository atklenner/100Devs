// Chaining built in methods
function rS(str) {
  return str.split("").reverse().join("");
}

// Chaining with ES6 syntax
function rSES6(str) {
  return [...str].reverse().join("");
}

// Using a for loop
function rSfor(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Using a for...of loop
function rSforES6(str) {
  let result = "";
  for (let char of str) {
    result = char + result;
  }
  return result;
}

// Recursively
function rSrecursive(str) {
  if (str === "") {
    return "";
  } else {
    return rSrecursive(str.substring(1)) + str[0];
  }
}

// Using reduce
function rSreduce(str) {
  return str.split("").reduce((acc, char) => char + acc, "");
}

// Using reduce and ES6
function rSreduceES6(str) {
  return [...str].reduce((acc, char) => char + acc, "");
}

// module.exports = reverseString;
module.exports = {
  rS,
  rSES6,
  rSfor,
  rSforES6,
  rSrecursive,
  rSreduce,
  rSreduceES6,
};
