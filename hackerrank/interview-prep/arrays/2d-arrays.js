// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let rows = arr.length;
    let columns = arr[0].length;
    let maxSum = -63;
    for (let i = 0; i < rows - 2; i++) {
        console.log(rows);
        for (let j = 0; j < columns - 2; j++) {
            console.log(j);
            let currentSum =
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2];
            maxSum = Math.max(maxSum, currentSum);
            console.log(maxSum);
        }
    }
    return maxSum;
}

// console.log(
//     hourglassSum([
//         [1, 1, 1, 0, 0, 0],
//         [0, 1, 0, 0, 0, 0],
//         [1, 1, 1, 0, 0, 0],
//         [0, 0, 2, 4, 4, 0],
//         [0, 0, 0, 2, 0, 0],
//         [0, 0, 1, 2, 4, 0],
//     ])
// ); // 19
console.log(
    hourglassSum([
        [-1, -1, 0, -9, -2, -2],
        [-2, -1, -6, -8, -2, -5],
        [-1, -1, -1, -2, -3, -4],
        [-1, -9, -2, -4, -4, -5],
        [-7, -3, -3, -2, -9, -9],
        [-1, -3, -1, -2, -4, -5],
    ])
); // 19
