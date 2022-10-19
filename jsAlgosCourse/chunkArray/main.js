function chunkArrayLoop(array, size) {
  let result = [];
  for (value of array) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length == size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

function chunkArraySplice(array, size) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

function chunkArraySlice(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function chunkArrayRecursive(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [
    array.slice(0, size),
    ...chunkArrayRecursive(array.slice(size), size),
  ];
}

module.exports = {
  chunkArrayLoop,
  chunkArraySplice,
  chunkArraySlice,
  chunkArrayRecursive,
};
