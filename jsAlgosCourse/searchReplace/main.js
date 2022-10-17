function searchReplace(str, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    return str.replace(word, newWord[0].toUpperCase() + newWord.slice(1));
  } else {
    return str.replace(word, newWord);
  }
}

function searchReplaceRegex(str, word, newWord) {
  let regex = new RegExp(word, "gi");
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  return str.replace(regex, newWord);
}

module.exports = { searchReplace, searchReplaceRegex };
