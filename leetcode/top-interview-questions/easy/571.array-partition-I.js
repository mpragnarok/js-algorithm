/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Sort the array: O(n)
    let sortedArr = nums.sort((a, b) => a - b);
    let sum = 0;
    // for loop to sum up min numbers: O(n)
    for (let i = 0; i < sortedArr.length; i += 2) {
        sum += Math.min(sortedArr[i], sortedArr[i + 1]);
    }
    // return maximized sum
    return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
