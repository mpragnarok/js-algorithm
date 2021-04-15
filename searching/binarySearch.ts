// This function accepts a sorted array and a value
function binarySearch(sortedArr: any[], val: any): number {
  // Create a left pointer at the start of the array, and a right pointer at the end of the array

  let leftPointer: number = 0;
  let rightPointer: number = sortedArr.length - 1;
  // While the left pointer comes before the right pointer:
  while (leftPointer <= rightPointer) {
    //      - Create a pointer in the middle
    let middle: number = Math.ceil((leftPointer + rightPointer) / 2);
    //      -  If you find the value you want, return the index
    if (sortedArr[middle] === val) return middle;
    //      - If the value is too small, move the left pointer up
    else if (sortedArr[middle] < val) leftPointer = middle + 1;
    //      - If the value is too large, move the right pointer down
    else rightPointer = middle - 1;
  }
  // If you never find the value, return -1
  return -1;
}

// This function accepts a sorted array and a value
function stevenBinarySearch(sortedArr: any[], val: any): number {
  // Create a left pointer at the start of the array, and a right pointer at the end of the array

  let start: number = 0;
  let end: number = sortedArr.length - 1;
  //      - Create a pointer in the middle

  let middle: number = Math.ceil((start + end) / 2);

  // While the left pointer comes before the right pointer:
  while (sortedArr[middle] !== val && start <= end) {
    //      -  If you find the value you want, return the index
    //      - If the value is too small, move the left pointer up
    if (sortedArr[middle] < val) start = middle + 1;
    //      - If the value is too large, move the right pointer down
    else end = middle - 1;

    middle = Math.ceil(start + end / 2);
    // If you never find the value, return -1
  }

  return sortedArr[middle] === val ? middle : -1;
}
// console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(
  stevenBinarySearch(
    [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
    ],
    73
  )
); // 20
// console.log(binarySearch([1,2,3,4,5],6));

// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

// https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search
