const example = "vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH";
// function replaces letters with opposites
const answer = "Example: 0 number or punctuation changes";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const tebahpla = "zyxwvutsrqponmlkjihgfedcba";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const TEBAHPLA = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

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

console.log(letterSwap(example));
console.log(letterSwap(example) === answer);
