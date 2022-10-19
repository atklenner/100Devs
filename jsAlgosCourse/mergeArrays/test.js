const mergeArrays = require("./main.js");

for (let func in mergeArrays) {
  test(`${func} is a function`, () => {
    expect(typeof mergeArrays[func]).toEqual("function");
  });

  test("Combines 5 arrays of numbers without dubplicates", () => {
    expect(mergeArrays[func]([1, 2], [2, 3], [3, 4], [4, 5])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  test("Combines 3 arrays of strings without dubplicates", () => {
    expect(
      mergeArrays[func](["a", "b", "z"], ["m", "n", "a"], ["z", "y"])
    ).toEqual(["a", "b", "z", "m", "n", "y"]);
  });
}
