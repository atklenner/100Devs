function reverseInteger(int) {
  return Math.sign(int) * parseInt(int.toString().split("").reverse().join(""));
}

module.exports = { reverseInteger };
