// A function for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function complexity:
// Time: O(n+m)
// Space: O(n+m)

function merge(arr1, arr2) {
    // Create an empty array, take a look at the smallest values in each input array
    let mergedArr = [];

    let i = 0;
    let j = 0;

    // While there are still values we haven't looked at..
    while (i < arr1.length && j < arr2.length) {
        //    If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            //    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    //    Once we exhaust one array, push in all remaining values from the other array
    if (i === arr1.length) {
        mergedArr = mergedArr.concat(arr2.slice(j));
    }

    if (j === arr2.length) {
        mergedArr = mergedArr.concat(arr1.slice(i));
    }
    return mergedArr;
}
function mergeAns(arr1, arr2) {
    // Create an empty array, take a look at the smallest values in each input array
    let mergedArr = [];

    let i = 0;
    let j = 0;

    // While there are still values we haven't looked at..
    while (i < arr1.length && j < arr2.length) {
        //    If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
        if (arr2[j] > arr1[i]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            //    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    //    Once we exhaust one array, push in all remaining values from the other array
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

console.log(mergeAns([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// merge sort Pseudocode
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
/**
 * BigO
 * Time: O(n log n): O(log n) decomposition, O(n) comparison per decomposition
 * Space: O(n)
 *  */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    // Break up the array into halves until you have arrays that are empty or have one element
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
