const reverseString = require("./main.js");

for (let func in reverseString) {
  test("reverseString is a function", () => {
    expect(typeof reverseString[func]).toEqual("function");
  });

  test("reverses a string of text", () => {
    expect(reverseString[func]("aeiou")).toEqual("uoiea");
  });

  test("reverses a string containing numbers", () => {
    expect(reverseString[func]("123456789")).toEqual("987654321");
  });

  test("reverses a string containing mixed case characters", () => {
    expect(reverseString[func]("AsDfGhJkL")).toEqual("LkJhGfDsA");
  });
}
