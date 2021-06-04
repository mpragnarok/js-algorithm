/**
 * @param {number[]} arr
 * @return {number}
 */
// Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?
// Constraints:
// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

var peakIndexInMountainArray = function (arr) {
    // for loop arr: O(n)
    let peakIndex = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        // compare two by two elements
        // if arr[i+1]> arr[i], record new peak index(i+1)
        if (arr[i] > arr[peakIndex]) {
            peakIndex = i;
        } else if (arr[i] > arr[i + 1]) {
            // Break the loop when arr[i] > arr[i+1] and return the peak index
            break;
        }
    }
    return peakIndex;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([3, 4, 5, 1])); // 2
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])); // 2
