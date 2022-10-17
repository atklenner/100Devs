const hammingDistance = require("./main.js");

for (let func in hammingDistance) {
  test(`${func} is a function`, () => {
    expect(typeof hammingDistance[func]).toEqual("function");
  });

  test("returns the hamming distance for letters", () => {
    expect(hammingDistance[func]("river", "rover")).toEqual(1);
  });

  test("returns the hamming distance for numbers", () => {
    expect(hammingDistance[func]("1011101", "1001001")).toEqual(2);
  });

  test("returns the hamming distance for letters", () => {
    expect(hammingDistance[func]("karolin", "kerstin")).toEqual(3);
  });

  test("returns the hamming distance for letters", () => {
    expect(hammingDistance[func]("drummer", "dresser")).toEqual(3);
  });
}
