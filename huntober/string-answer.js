const twitterString =
  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";

const cipher = {
  0: "O",
  1: "I",
  2: "Z",
  3: "E",
  4: "h",
  5: "S",
  6: "G",
  7: "L",
  8: "B",
  9: "q",
  O: "0",
  I: "1",
  Z: "2",
  E: "3",
  h: "4",
  S: "5",
  G: "6",
  L: "7",
  B: "8",
  q: "9",
};

function translateString(str) {
  // Day 1
  let calculatorCode = str.split("").reduce((acc, cur) => {
    if (cur in cipher) {
      return acc + cipher[cur];
    } else {
      return acc + cur;
    }
  }, "");
  // Day 2
  function transformString(str) {
    let index = str.indexOf("c");
    let undoCatMangle = str.slice(index + 1);
    let undoEek = undoCatMangle.replace(/Eek!/g, "");
    return undoEek.split("").reverse().join("");
  }
  let undoCatDamage = transformString(calculatorCode);

  // function transformFurther(str) {
  //   return str
  //     .split("v")
  //     .slice(1)
  //     .reduce((acc, cur) => acc + cur[0], "");
  // }
  // Day 3
  function removeChars(str) {
    return str.replace(/[Space]/g, " ");
  }
  let giveMeSomeSpace = removeChars(undoCatDamage);

  // Day 4
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  return reverseString(giveMeSomeSpace);
}

console.log(translateString(twitterString));
