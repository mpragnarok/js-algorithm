// A sorting algorithm where the largest values bubble up to the top
function bubbleSort(arr) {
    // start looping from with a variable called i the end of the array towards the beginning

    for (let i = arr.length; i > 0; i--) {
        // start an inner loop with a variable called j from the beginning until i-1
        for (let j = 0; j < i - 1; j++) {
            // if arr[j] is greater than arr[j+1], swap those two values
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr);
    // return the sorted array
    return arr;
}

bubbleSort([3, 4, 1, 9, 0]); // [0,1,3,4,9]
