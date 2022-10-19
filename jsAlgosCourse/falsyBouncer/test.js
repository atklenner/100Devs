const falsyBouncer = require("./main.js");

for (let func in falsyBouncer) {
  test(`${func} is a function`, () => {
    expect(typeof falsyBouncer[func]).toEqual("function");
  });

  test("Removes all falsy values", () => {
    expect(falsyBouncer[func]([1, 0, null, "", 5])).toEqual([1, 5]);
  });

  test("Removes all falsy values", () => {
    expect(falsyBouncer[func]([NaN, 0, null, "", undefined])).toEqual([]);
  });
}
