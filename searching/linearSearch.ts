// best: O(1), Average: O(n), Worst: O(n)
function linearSearch(arr: any[], val: any): number {
  let index: number = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
    }
  }
  return index;
}

function stephenLinearSearch(arr: any[], val: any): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15);
