function capSentenceForEach(str) {
  let wordsArray = str.toLowerCase().split(" ");
  let capsArray = [];

  wordsArray.forEach((word) => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
  });

  return capsArray.join(" ");
}

function capSentenceMapSlice(str) {
  let wordsArray = str.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capsArray.join(" ");
}

function capSentenceMapReplace(str) {
  let wordsArray = str.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  return capsArray.join(" ");
}

module.exports = {
  capSentenceForEach,
  capSentenceMapSlice,
  capSentenceMapReplace,
};
