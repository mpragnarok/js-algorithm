function selectionSort(arr) {
    // Store the first element as the smallest value you've seen so far

    for (let i = 0; i < arr.length; i++) {
        let minimum = arr[i];
        let index = i;

        for (let j = i + 1; j < arr.length; j++) {
            // Compare this item to the next item in the array until you find a smaller number
            // if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
            minimum = Math.min(minimum, arr[j]);
            console.log(minimum);

            if (minimum === arr[j]) {
                index = j;
            }
            // if the "minimum" is not the value(index) you initially began with, swap the two values

            if (minimum !== arr[i]) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
            }
            // repeat this with the next element until the array is sorted
        }
    }
    return arr;
}

selectionSort([5, 3, 4, 1, 2]);
selectionSort([22, 13, -11, 1, 2]);

function selectionSortAns(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    console.log(arr);
    return arr;
}

selectionSortAns([34, 22, 10, 19, 17]);

function selectionSortEs15Ans(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    console.log(arr);
    return arr;
}

selectionSortEs15Ans([0, 34, 22, 10, 19, 17]);
