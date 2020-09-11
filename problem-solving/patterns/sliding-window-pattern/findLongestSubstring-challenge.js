/* Write a function called **findLongestSubstring,** which accepts a string and returns the length of the longest substring with all distinct characters.
Time Complexity - O (n)*/

// my solution
// function findLongestSubstring(str) {
//     //create window start and end flag
//     let start = 0;
//     let end = 1;
//     let longLen = -Infinity;

//     while (start < str.length) {
//         // create set of string in the sliding window
//         let sliceStr = str.split("").slice(start, end);

//         let strSet = new Set(sliceStr);

//         // if end <= str.length and sliceStr <= strSet
//         // longLen equal to end - start
//         // compare the maximum from longLen and end - start and end++
//         if (end <= str.length && sliceStr.length <= strSet.size) {
//             longLen = Math.max(longLen, end - start);
//             end++;
//         } else if (sliceStr.length > strSet.size) {
//             // if strSet length > sliceStr length, move the window (start++), the value is duplicated
//             start++;
//         } else {
//             break;
//         }
//     }
//     console.log("ans:", longLen === -Infinity ? 0 : longLen);
//     return longLen === -Infinity ? 0 : longLen;
// }

// Colt's solution
function findLongestSubstring(str) {
    str;
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(seen);

        // if the char has seen, start from that char
        if (seen[char]) {
            console.log(char, seen[char]);
            start = Math.max(start, seen[char]);
            start;
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        console.log(`longest= Math.max( ${longest},${i}- ${start} + 1)`);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

// findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7 (rithmsc)
// findLongestSubstring("thisisawesome"); // 6 (awesom)
// findLongestSubstring("thecatinthehat"); // 7 (hecatin)
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8 (ubstring)
// findLongestSubstring("thisishowwedoit"); // 6 (wedoit)
