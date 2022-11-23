// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates = s => {
  // break the string apart on " "
  // keep track of a current string
  // use forEach to loop through the array
  // if there is a new word add it to a return array and track it in the current string
  // if the word is the same as the current string then skip over it
  // return the array joined by " "
  let words = s.split(" ");
  let curr = "";
  let arr = [];
  words.forEach((word) => {
    if (word !== curr) {
      curr = word;
      arr.push(word);
    }
  }
  return arr.join(" ");
}
  
