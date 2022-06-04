// Minimum
function min(a, b) {
  if (a < b) return a;
  return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
function isEven(num) {
  if (num < 0) {
    console.log("Input must be non-negative");
  } else if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean Counting
function countBs(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "B") count++;
  }
  return count;
}
function countChar(word, char) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) count++;
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
