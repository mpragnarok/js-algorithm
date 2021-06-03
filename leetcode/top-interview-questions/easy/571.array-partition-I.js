/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Sort the array: merge sort, O(n log(n))
    let sortedArr = nums.sort((a, b) => a - b);
    let sum = 0;
    // for loop to sum up min numbers: O(n)
    for (let i = 0; i < sortedArr.length; i += 2) {
        // sum += Math.min(sortedArr[i], sortedArr[i + 1]);
        sum += sortedArr[i]; // cause it's sorted
    }
    // return maximized sum
    return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
// https://leetcode.com/problems/array-partition-i/discuss/466257/Explanation-for-O(n)-solution
var arrayPairSumN = function (nums) {
    /**
     * limitation:
     *   -10^4 <= nums[i] <= 10^4
     *   the length of arr: 1 <= n <= 10^4
     **/

    // create a array to store the sorted elements
    // array index: the number
    // array element: the amount of number
    // the array will be sorted
    let arr = [];

    // sort the array with for loop
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i] + 10000] = (arr[nums[i] + 10000] || 0) + 1;
    }
    let flag = true; // flag to control add or not
    // sum up the array
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        while (arr[j]) {
            console.log('🚀 ~ file: 571.array-partition-I.js ~ line 43 ~ arrayPairSumN ~ arr[j]', arr[j]);
            if (flag) {
                sum += j - 10000;
            }
            // add one, skip one
            flag = !flag;
            // minus the amount of numbers if met
            arr[j]--;
        }
    }

    return sum;
};

console.log(arrayPairSumN([1, 1, 1, 4, 3, 2]));
