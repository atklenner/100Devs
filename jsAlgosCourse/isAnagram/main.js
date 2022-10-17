function isAnagram(strA, strB) {
  return sanitizeString(strA) === sanitizeString(strB);
}

function isAnagramMyWay(strA, strB) {
  return sanitizeStringMyWay(strA) === sanitizeStringMyWay(strB);
}

function isAnagramCharMap(strA, strB) {
  if (strA.length === strB.length) {
    let strAMap = createCharMap(strA);
    let strBMap = createCharMap(strB);
    for (let char in strAMap) {
      if (strAMap[char] !== strBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function sanitizeString(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\d]/g, "")
    .split("")
    .sort()
    .join("");
}

function sanitizeStringMyWay(str) {
  return str.toLowerCase().match(/[a-z]/g).sort().join("");
}

function createCharMap(str) {
  let charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

module.exports = { isAnagram, isAnagramMyWay, isAnagramCharMap };
