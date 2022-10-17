const searchReplace = require("./main.js");

for (let func in searchReplace) {
  test(`${func} is a function`, () => {
    expect(typeof searchReplace[func]).toEqual("function");
  });

  test("replaces Sleeping with Sitting", () => {
    expect(
      searchReplace[func]("He is Sleeping on the couch", "Sleeping", "sitting")
    ).toEqual("He is Sitting on the couch");
  });
}
