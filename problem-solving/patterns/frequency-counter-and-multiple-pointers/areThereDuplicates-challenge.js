/* Implement a function called, **areThereDuplicates**  which accepts a **variable number of arguments**, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
 */
// Examples:
// make args to an Array
// frequency counter
// function areThereDuplicates() {
//     let collection = {};
//     console.log(typeof arguments);
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//         console.log(collection);
//     }

//     for (let key in collection) {
//         if (collection[key] > 1) {
//             console.log(true);
//             return true;
//         }
//     }
//     console.log(false);
//     return false;
// }

// multiple pointers
// need to implement with sorted array
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) return true;
//         start++;
//         next++;
//     }
//     return false;
// }

// one liner solution
// What's happening is the Set is removing the duplicates, then comparing the resulting Set to the original argument. If there is a difference in the sizes, this confirms there were duplicates. So the function returns true in that case.
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3); //false
areThereDuplicates(1, 2, 2); //true
areThereDuplicates("a", "b", "c", "a"); // true
