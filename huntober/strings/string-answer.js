const twitterString =
  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";

const cipher = {
  0: "O",
  1: "I",
  2: "Z",
  3: "E",
  4: "h",
  5: "S",
  6: "G",
  7: "L",
  8: "B",
  9: "q",
  O: "0",
  I: "1",
  Z: "2",
  E: "3",
  h: "4",
  S: "5",
  G: "6",
  L: "7",
  B: "8",
  q: "9",
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const tebahpla = "zyxwvutsrqponmlkjihgfedcba";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const TEBAHPLA = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

function translateString(str) {
  // Day 1
  let calculatorCode = str.split("").reduce((acc, cur) => {
    if (cur in cipher) {
      return acc + cipher[cur];
    } else {
      return acc + cur;
    }
  }, "");

  // Day 2
  // The clue was "Space"

  // Day 3
  function removeChars(str) {
    return str.replace(/[Space]/g, " ");
  }
  let giveMeSomeSpace = removeChars(calculatorCode);

  // Day 4
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  let gnirts = reverseString(giveMeSomeSpace);

  // Day 5
  // The number was "3"

  // Day 6
  function removeLetters(str, value) {
    return str.split("").reduce((acc, cur, index) => {
      if ((index + 1) % value == 0) return acc + "";
      return acc + cur;
    }, "");
  }

  let lettersRemoved = removeLetters(gnirts, 3);

  // Day 7
  function letterSwap(str) {
    return str.split("").reduce((acc, cur) => {
      if (alphabet.includes(cur)) {
        return acc + TEBAHPLA[alphabet.indexOf(cur)];
      } else if (ALPHABET.includes(cur)) {
        return acc + tebahpla[ALPHABET.indexOf(cur)];
      } else {
        return acc + cur;
      }
    }, "");
  }

  return letterSwap(lettersRemoved);
}

console.log(translateString(twitterString));
