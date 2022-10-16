const vowelsCounter = require("./main.js");

for (let func in vowelsCounter) {
  test(`${func} is a function`, () => {
    expect(typeof vowelsCounter[func]).toEqual("function");
  });

  test("returns the number of vowels found", () => {
    expect(vowelsCounter[func]("aeiou")).toEqual(5);
  });

  test("returns the number of vowels found when string is capitalized", () => {
    expect(vowelsCounter[func]("AEIOU")).toEqual(5);
  });

  test("returns the number of vowels found when all alphabets are passed in", () => {
    expect(vowelsCounter[func]("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
  });

  test("returns the number of vowels found when string has mixed capitalization", () => {
    expect(vowelsCounter[func]("Abcdegfizzjbhso")).toEqual(4);
  });

  test("doesn't break when you input an empty string", () => {
    expect(vowelsCounter[func]("")).toEqual(0);
  });
}
