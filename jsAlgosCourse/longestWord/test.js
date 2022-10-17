const longestWord = require("./main.js");

for (let func in longestWord) {
  test(`${func} is a function`, () => {
    expect(typeof longestWord[func]).toEqual("function");
  });

  test("returns the longet word in a mixed case string of text", () => {
    expect(
      longestWord[func]("Top Shelf Web Development Training on Scotch")
    ).toEqual("Development");
  });

  test("returns the longet word in a lowercase string", () => {
    expect(longestWord[func]("the ultimate guide to js algorithms")).toEqual(
      "algorithms"
    );
  });
  test("returns the longet word in an uppercase string", () => {
    expect(longestWord[func]("BUILDING FOR THE NEXT BILLION USERS")).toEqual(
      "BUILDING"
    );
  });
}
