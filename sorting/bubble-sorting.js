// A sorting algorithm where the largest values bubble up to the top
// use bubble sort unless you know the data is nearly sorted
// time complexity: O(n^2)
function bubbleSort(arr) {
    // start looping from with a variable called i the end of the array towards the beginning
    let noSwap;

    for (let i = arr.length; i > 0; i--) {
        // start an inner loop with a variable called j from the beginning until i-1
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            // if arr[j] is greater than arr[j+1], swap those two values
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // swap the items
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        // break loop when there's no swap
        if (noSwap) break;
    }
    console.log(arr);
    // return the sorted array
    return arr;
}

// bubbleSort([3, 4, 1, 9, 0]); // [0,1,3,4,9]
bubbleSort([8, 1, 2, 3, 4, 5, 6]);
