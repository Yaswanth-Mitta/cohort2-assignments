/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let checksum1 = str1[0];
  let checksum2 = str2[0];
  for (let i = 1; i < str1.length; i++){
    checksum1 ^= str1[i];
  }
  for (let i = 1; i < str2.length; i++){
    checksum2 ^= str2[i];
  }
  return checksum1 === checksum2;
}

module.exports = isAnagram;
