myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"];
// move things around
myArrAnswer = ["hola", "hallo", "hi", "hej", "hello", "howdy", "heyyy"];

function reorder(arr) {
  let containsA = arr.filter((str) => str.includes("a"));
  console.log(containsA);
  let isLongerThanThree = arr.filter(
    (str) => !str.includes("a") && str.length > 3
  );
  console.log(isLongerThanThree);
  let theRest = arr.filter((str) => !str.includes("a") && str.length <= 3);
  console.log(theRest);
  return containsA.concat(theRest, isLongerThanThree);
}

console.log(reorder(myArr));
