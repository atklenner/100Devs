function maxRecurringChar(str) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxChar = char;
      maxCharValue = charMap[char];
    }
  }

  return maxChar;
}

function maxCharES6(str) {
  let charMap = {};
  let charArray = [];
  let valuesArray = [];
  let maxCharValue = 0;

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);

  return charArray[valuesArray.indexOf(maxCharValue)];
}

function maxReduce(str) {
  let maxCharValue = 0;
  let maxChar = "";
  let charMap = str.split("").reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
      return acc;
    } else {
      acc[cur] = 1;
      return acc;
    }
  }, {});

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxChar = char;
      maxCharValue = charMap[char];
    }
  }

  return maxChar;
}

module.exports = { maxRecurringChar, maxCharES6, maxReduce };
