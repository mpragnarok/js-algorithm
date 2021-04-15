// build up the sort by gradually creating a larger left half which is always sorted
// Time complexity:
// if the data is nearly sorted, insertion sort is good
// otherwise it's O(n^2)

function insertionSort(arr) {
    // start by picking the second element in the array
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        for (j; j >= 0 && arr[j] > current; j--) {
            // now compare the second element with the one before it and swap if necessary
            arr[j + 1] = arr[j];
        }
        // continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
        arr[j + 1] = current;
    }

    // repeat until the array is sorted

    return arr;
}
// insertionSort([0, 34, 22, 10, 19, 17]);
insertionSort([2, 1, 9, 76, 4]);
