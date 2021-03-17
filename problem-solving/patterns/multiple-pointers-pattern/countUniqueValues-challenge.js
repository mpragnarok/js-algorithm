/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.*/

// Bonus
// You must do this with constant or O(1) space and O(n) time.

// my solution

// function countUniqueValues(arr) {
//     let index1 = 0;
//     let index2 = index1 + 1;
//     if (arr.length === 0) {
//         return 0;
//     }
//     while (index1+1 < arr.length) {
//         if (arr[index1] === arr[index+1]) {
//             index2++;
//         } else {
//             ++index1;
//             arr[index1] = arr[index+1];
//         }
//     }

//     return index1 + 1;
// }

// Time complexity: O(n)
// Space complexity: O(n)
// Colt's solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
