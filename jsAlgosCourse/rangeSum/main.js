function rangeSumFor(arr) {
  let sum = 0;
  for (let i = arr[0]; i < arr[1]; i++) {
    sum += i;
  }
  return sum;
}

function rangeSumGauss(arr) {
  return ((arr[1] - arr[0] + 1) * (arr[0] + arr[1])) / 2;
}

function rangeSumRecursive(arr) {
  if (arr[0] === arr[1]) {
    return arr[0];
  } else {
    return arr[0] + rangeSumRecursive([arr[0] + 1, arr[1]]);
  }
}

function rangeSumReduce(arr) {
  let arrList = [];
  for (let i = arr[0]; i < arr[1]; i++) {
    arrList.push(i);
  }
  return arrList.reduce((acc, cur) => acc + cur, 0);
}
