const vowels = ["a", "e", "i", "o", "u"];

function iterativeCounter(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

function regexCounter(str) {
  return str.match(/[aeiou]/gi)?.length ?? 0;
}

module.exports = { iterativeCounter, regexCounter };
