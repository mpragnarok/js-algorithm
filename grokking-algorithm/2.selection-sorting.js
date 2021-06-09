function findSmallest(array) {
    // Stores the smallest value
    let smallest = array[0];
    // Stores the index of the smallest value
    let smallestIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            smallestIndex = i;
        }
    }
    console.log('smallest is ', smallest);
    return smallestIndex;
}
// Sort the array
function selectionSort(arr) {
    let newArr = [];
    let arrLen = arr.length;
    for (let j = 0; j < arrLen; j++) {
        // Find the smallest element in the array
        let smallest = findSmallest(arr);
        console.log('smallest', smallest);
        // Push element to the new array
        newArr.push(arr[smallest]);
        // remove element from the array
        arr.splice(smallest, 1);
        console.log('arr', arr);
        console.log('newArr', newArr, j);
    }
    return newArr;
}

console.log('result', selectionSort([5, 3, 6, 2, 10]));
