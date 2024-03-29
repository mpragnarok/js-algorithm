// function charCount(str) {
//   // make object to return at end
//   let result = {};
//   // loop over string, for each character...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     // if the char is a number / letter AND is a key in object, add one to count
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         // if the char is a number / letter AND not in object, add it to object and set value to 1
//         result[char] = 1;
//       }
//     }
//   }
//   // if char is something else (space, period, etc.) don't do anything
//   // return object at end
//   console.log(result);
//   return result;
// }

// Refactor

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  console.log(obj);
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:2, l:2, o:1}
charCount("Your PIN number is 1234!");
/*
{
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1, 
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1,
}
*/
