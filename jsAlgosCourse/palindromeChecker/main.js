function palindromeChecker(str) {
  let reversedText = str.split("").reverse().join("");
  return str === reversedText;
}

function palindromeCheckerEvery(str) {
  let charArray = str.split("");
  return charArray.every((char, index) => {
    return char === charArray[charArray.length - 1 - index];
  });
}

function palindromeCheckerOptimized(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

module.exports = {
  palindromeChecker,
  palindromeCheckerEvery,
  palindromeCheckerOptimized,
};
