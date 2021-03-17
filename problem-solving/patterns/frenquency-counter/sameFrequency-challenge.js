/* Write a function called **sameFrequency** Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)*/
// Sample Input:
// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // true

function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();
  if (num1String.length !== num2String.length) return false;

  let countObj1 = {};
  let countObj2 = {};
  // iterate array or string with for...of
  for (let char of num1String) {
    countObj1[char] = (countObj1[char] || 0) + 1;
  }

  for (let char of num2String) {
    countObj2[char] = (countObj2[char] || 0) + 1;
  }
  // iterate  object with for...in
  for (let key in countObj1) {
    if (!(key in countObj2)) {
      return false;
    }

    if (countObj1[key] !== countObj2[key]) {
      return false;
    }
  }
  return true;
}
