/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.*/

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

// naive solution
// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     // start with negative infinity cause we wanna count for an array with all negative numbers
//     let max = -Infinity;

//     for (let i = 0; i < arr.length - number + 1; i++) {
//         let temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//         return max;
//     }
// }

// Refactor solution
// Time complexity: O(N)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // subtract the first num and add new number to get new sum
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17