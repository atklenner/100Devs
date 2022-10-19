const chunkArray = require("./main.js");

for (let func in chunkArray) {
  test(`${func} is a function`, () => {
    expect(typeof chunkArray[func]).toEqual("function");
  });

  test("Chunks array of 10 elements in twos", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunkedArray = chunkArray[func](arr, 2);

    expect(chunkedArray).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  test("Chunks array of 13 elements in five and some", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunkedArray = chunkArray[func](arr, 5);

    expect(chunkedArray).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
  });
}
