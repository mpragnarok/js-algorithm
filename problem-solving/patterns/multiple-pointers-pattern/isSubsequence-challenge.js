/*Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, **without their order changing.**

Your solution MUST have AT LEAST the following complexities: 
Time Complexity - O(N + M)
Space Complexity - O(1)
 */
// Iterative
// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;

//     if (!str1) return true;

//     while (j < str2.length) {
//         console.log("str1[i] vs str1[j]: ", `${str1[i]} vs ${str1[j]}`);
//         if (str1[i] === str2[j]) i++;
//         // if
//         if (i === str1.length) {
//             console.log(true);
//             return true;
//         }
//         j++;
//     }
//     console.log(false);
//     return false;
// }

// Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  console.log(`str1: ${str1} vs str2: ${str2}`);
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  //  arr.slice([start[, end]]) returns a shallow copy of a portion of an array into a new array object
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

//Examples:
// isSubsequence("hello", "hello world"); //true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
