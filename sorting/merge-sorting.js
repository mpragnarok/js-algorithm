// merging and sorting
// merging arrays

function merge(arr1, arr2) {
    /** given tw arrays which are sorted, this helper function should create a new array which is also sorted
     * Time complexity: O(n+m)
     * Space complexity: O(n+m)
     *should not modify the parameters passed in
     */
    // Create an empty array, take a look at the smallest values in each input array
    let results = [];
    let i = 0;
    let j = 0;
    // While there are still values we haven't looked at
    //   If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    while (i < arr1.length && j < arr2.length) {
        // push the smaller one to results and move the index i or j
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            //    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            results.push(arr2[j]);
            j++;
        }
    }
    //    Once we exhaust one array, push in all remaining values from the other array
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    console.log(results);
    return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);
