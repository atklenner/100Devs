const palindromeChecker = require("./main.js");

for (let func in palindromeChecker) {
  test(`${func} is a function`, () => {
    expect(typeof palindromeChecker[func]).toEqual("function");
  });

  test('"php" is a palindrome', () => {
    expect(palindromeChecker[func]("php")).toBeTruthy();
  });

  test('" php  " is not a palindrome', () => {
    expect(palindromeChecker[func](" php  ")).toBeFalsy();
  });

  test('"developer" is not a palindrome', () => {
    expect(palindromeChecker[func]("developer")).toBeFalsy();
  });

  test('"2002" a palindrome', () => {
    expect(palindromeChecker[func]("2002")).toBeTruthy();
  });
}
