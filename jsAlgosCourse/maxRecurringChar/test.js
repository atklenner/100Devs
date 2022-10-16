const maxRecurringChar = require("./main.js");

for (let func in maxRecurringChar) {
  test("maxRecurringChar is a function", () => {
    expect(typeof maxRecurringChar[func]).toEqual("function");
  });

  test("Finds the most frequently used character", () => {
    expect(maxRecurringChar[func]("sisusbsnshsjsmskslstsw")).toEqual("s");
  });

  test("Finds the most frequently used character even with mixed capitalization", () => {
    expect(maxRecurringChar[func]("AbAdAabnmkAAAynjfaA")).toEqual("A");
  });

  test("Finds the most used number as well", () => {
    expect(maxRecurringChar[func]("b2n3n2m2l2k2i2o2")).toEqual("2");
  });
}
