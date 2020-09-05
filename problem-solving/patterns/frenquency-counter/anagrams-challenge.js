/* Anagrams Challenge:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.*/

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // define frequencyLetter1 and frequencyLetter2

  let frequencyLetter1 = {};
  let frequencyLetter2 = {};

  // for loop str1 to get frequencyLetter1
  for (let alpha of str1) {
    frequencyLetter1[alpha] = (frequencyLetter1[alpha] || 0) + 1;
  }

  // for loop str2 to get frequencyLetter2
  for (let alpha of str2) {
    frequencyLetter2[alpha] = (frequencyLetter2[alpha] || 0) + 1;
  }

  // for loop frequencyLetter1 compares key and value within frequencyLetter2

  for (let key in frequencyLetter1) {
    if (!(key in frequencyLetter2[key])) {
      return false;
    }

    if (frequencyLetter1[key] !== frequencyLetter2[key]) {
      return false;
    }
  }
  return true;

  // Anki: differences between  for of and for in
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
