const reverseInteger = require("./main.js");

for (let func in reverseInteger) {
  test(`${func} is a function`, () => {
    expect(reverseInteger[func]).toBeDefined();
  });

  test("reverseInteger handles 0 as an input", () => {
    expect(reverseInteger[func](0)).toEqual(0);
  });

  test("reverseInteger flips a positive number", () => {
    expect(reverseInteger[func](5)).toEqual(5);
    expect(reverseInteger[func](15)).toEqual(51);
    expect(reverseInteger[func](90)).toEqual(9);
    expect(reverseInteger[func](2359)).toEqual(9532);
  });

  test("reverseInteger flips a negative number", () => {
    expect(reverseInteger[func](-5)).toEqual(-5);
    expect(reverseInteger[func](-15)).toEqual(-51);
    expect(reverseInteger[func](-90)).toEqual(-9);
    expect(reverseInteger[func](-2359)).toEqual(-9532);
  });
}
