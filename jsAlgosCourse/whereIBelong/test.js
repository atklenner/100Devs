const whereIBelong = require("./main.js");

for (let func in whereIBelong) {
  test(`${func} is a function`, () => {
    expect(typeof whereIBelong[func]).toEqual("function");
  });

  test("returns the appropriate index", () => {
    expect(whereIBelong[func]([1, 2, 3, 4], 1.5)).toEqual(1);
  });

  test("returns the index of the specified number", () => {
    expect(whereIBelong[func]([10, 20, 30, 40, 50], 30)).toEqual(2);
  });

  test("returns the index even with an empty array", () => {
    expect(whereIBelong[func]([], 1)).toEqual(0);
  });
}
