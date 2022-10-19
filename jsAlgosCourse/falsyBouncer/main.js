function falsyBouncerFor(array) {
  let result = [];
  for (value of array) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}

function falsyBouncerFilter(array) {
  return array.filter((value) => value);
}

module.exports = { falsyBouncerFilter, falsyBouncerFor };
