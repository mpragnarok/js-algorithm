/*Write a recursive function called **someRecursive** which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.*/

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

//my solution
function someRecursive(arr, callback) {
  let flag = arr.length ? callback(arr[0]) : false;
  if (arr.length === 0) return flag;
  if (flag) return flag;
  return someRecursive(arr.slice(1), callback);
}

// Colt's solution

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true

// someRecursive([4, 6, 8, 9], isOdd); // true
// console.log(
//     "someRecursive([4, 6, 8, 9], isOdd)",
//     someRecursive([4, 6, 8, 9], isOdd)
// );
// someRecursive([4, 6, 8], isOdd); // false
// console.log("someRecursive([4, 6, 8], isOdd)", someRecursive([4, 6, 8], isOdd));
someRecursive([4, 6, 8], (val) => val > 10); // false
console.log(
  "someRecursive([4, 6, 8], (val) => val > 10)",
  someRecursive([4, 6, 8], (val) => val > 10)
);
