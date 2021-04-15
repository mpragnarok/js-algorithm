/*Write a recursive function called **flatten** which accepts an array of arrays and returns a new array with all values flattened.*/
// colt's solution
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// other's solution
function flatten([first, ...rest]) {
  if (!first) return [];
  if (Array.isArray(first)) {
    return [...flatten(first), ...flatten(rest)];
  } else {
    return [first, ...flatten(rest)];
  }
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// console.log("flatten([1, 2, 3, [4, 5] ])", flatten([1, 2, 3, [4, 5]]));
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// console.log(
//     "flatten([1, [2, [3, 4], [[5]]]])",
//     flatten([1, [2, [3, 4], [[5]]]])
// );
flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
