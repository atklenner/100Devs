// For the string below and 4
const example1 = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!";
// remove decoy strings
const answer1 = "This is Halloween! This is Halloween!";

// For the string below and 5
const example2 = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.";
// remove decoy strings and preach 🙌
const answer2 = "The Bachelor is a terrible television show.";

function removeLetters(str, value) {
  return str.split("").reduce((acc, cur, index) => {
    if ((index + 1) % value == 0) return acc + "";
    return acc + cur;
  }, "");
}

console.log(removeLetters(example1, 4));
console.log(removeLetters(example1, 4) === answer1);

console.log(removeLetters(example2, 5));
console.log(removeLetters(example2, 5) === answer2);
