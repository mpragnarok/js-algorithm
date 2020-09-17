/*productOfArray
Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all.
 */

// helper method recursion
// function productOfArray(arr) {
//     let product = 1;
//     function helper(helperInput) {
//         if (helperInput.length === 0) return;
//         product *= helperInput[0];
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return product;
// }

// pure recursion
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
