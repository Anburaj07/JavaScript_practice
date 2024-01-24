const multiDimensionalArray = [[1, 2, 3], [4, 5], [6, 7, 8]];

// Using array.reduce to flatten the array
const flattenedArray = multiDimensionalArray.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);