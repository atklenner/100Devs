const isAnagram = require("./main.js");

for (let func in isAnagram) {
  test(`${func} is a function`, () => {
    expect(typeof isAnagram[func]).toEqual("function");
  });

  test('"dog" is an anagram of "god"', () => {
    expect(isAnagram[func]("dog", "god")).toBeTruthy();
  });

  test('"Scotchy is Scotch!" is an anagram of "Scotch is Scotchy!"', () => {
    expect(
      isAnagram[func]("Scotchy is Scotch!", "Scotch is Scotchy!")
    ).toBeTruthy();
  });

  test('"I do not work weekends." is not an anagram of "I do not work weekdays!"', () => {
    expect(
      isAnagram[func]("I do not work weekends.", "I do not work weekdays!")
    ).toBeFalsy();
  });
}
