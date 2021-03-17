// function removeDuplicates(nums: number[]): number {
//   if (nums.length === 0) return 0;
//   let j = 1;
//   let i = 0;
//   while (j < nums.length) {
//     if (nums[i] === nums[j]) {
//       j++;
//     } else {
//       i++;
//       nums[i] = nums[j];
//       j++;
//     }
//   }
//   console.log(nums);

//   console.log(i);
//   return i + 1;
// }

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let j = 1;
  let i = 0;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  console.log(nums);

  console.log(i);
  return i + 1;
}
removeDuplicates([1, 1, 2]);
// removeDuplicates([1,1])
// removeDuplicates([0,1,1,2,3,3,4,4])
