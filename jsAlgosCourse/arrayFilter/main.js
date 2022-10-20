function arrayFilter(arr, func) {
  for (let element of arr) {
    if (func(element)) return element;
  }
  return undefined;
}

function arrayFilterLazy(arr, func) {
  let filteredArray = arr.filter(func);
  return filteredArray[0] ?? undefined;
}

function arrayFilterFind(arr, func) {
  return arr.find(func);
}
