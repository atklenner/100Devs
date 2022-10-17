const capSentence = require("./main.js");

for (let func in capSentence) {
  test(`${func} is a function`, () => {
    expect(typeof capSentence[func]).toEqual("function");
  });

  test("capitalizes the first letter of each word in a lowercase sentence", () => {
    expect(capSentence[func]("i must confess, this is so much fun.")).toEqual(
      "I Must Confess, This Is So Much Fun."
    );
  });

  test("capitalizes the first letter of each word in an uppercase sentence", () => {
    expect(capSentence[func]("THIS ONE IS FOR SCOTCH.")).toEqual(
      "This One Is For Scotch."
    );
  });

  test("capitalizes the first letter of each word in mixed cased sentences", () => {
    expect(capSentence[func]("i woulD lOVe to spEAk at jsconF.")).toEqual(
      "I Would Love To Speak At Jsconf."
    );
  });
}
