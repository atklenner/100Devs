function hammingDistance(strA, strB) {
  let result = 0;

  if (strA.length === strB.length) {
    for (let i = 0; i < strA.length; i++) {
      if (strA[i].toLowerCase() !== strB[i].toLowerCase()) {
        result++;
      }
    }
    return result;
  } else {
    throw new Error("Strings do not have equal length");
  }
}

module.exports = { hammingDistance };
