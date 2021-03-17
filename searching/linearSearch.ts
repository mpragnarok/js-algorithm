function linearSearch(arr: any[], val: any): number {
  let index: number = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
    }
  }
  return index;
}

linearSearch([10, 15, 20, 25, 30], 15);
