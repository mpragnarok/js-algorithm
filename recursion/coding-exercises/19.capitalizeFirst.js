/*Write a recursive function called **capitalizeFirst**. Given an array of strings, capitalize the first letter of each string in the array.*/
// get Item i
// Make the first letter to uppercase
// put item i back
// function capitalizeFirst(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//     }
//     if (newArr.length === arr.length) {
//         return newArr;
//     }
//     return capitalizeFirst(arr.slice(1));
// }

// colt's solution
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);

  res.push(string);
  return res;
}
capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
console.log(
  "capitalizeFirst(['car', 'taco', 'banana'])",
  capitalizeFirst(["car", "taco", "banana"])
);
