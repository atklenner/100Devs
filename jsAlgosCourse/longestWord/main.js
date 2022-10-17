function longestWordFor(str) {
  let wordArray = str.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i];
    }
  }

  return result;
}

function longestWordReduce(str) {
  return str.split(" ").reduce((acc, cur) => {
    return acc.length < cur.length ? cur : acc;
  }, "");
}

function longestWordSort(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

module.exports = { longestWordFor, longestWordReduce, longestWordSort };
