function mergeArraysSet(...arrays) {
  let jointArray = [];
  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  return [...new Set([...jointArray])];
}

function mergeArraysFilter(...arrays) {
  let jointArray = [];
  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  let uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}

function mergeArraysReduce(...arrays) {
  let jointArray = [];
  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);
  return uniqueArray;
}

module.exports = { mergeArraysSet, mergeArraysFilter, mergeArraysReduce };
