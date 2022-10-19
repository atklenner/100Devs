function whereIBelong(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

function whereIBelong2(arr, num) {
  let counter = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) counter++;
  }
  return counter;
}

function whereIBelongWhile(arr, num) {
  arr.sort((a, b) => a - b);
  let counter = 0;
  while (num > arr[counter]) {
    counter++;
  }
  return counter;
}

function whereIBelongDirect(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

module.exports = {
  whereIBelong,
  whereIBelong2,
  whereIBelongWhile,
  whereIBelongDirect,
};
