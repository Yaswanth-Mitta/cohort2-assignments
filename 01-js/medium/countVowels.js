/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vo = 0;
  for (i of str) {
    if (
      i == "a" ||
      i == "e" ||
      i == "i" ||
      i == "o" ||
      i == "u" ||
      i == "A" ||
      i == "E" ||
      i == "I" ||
      i == "O" ||
      i == "U"
    ) {
      vo++;
    }
  }
  return vo;
}

module.exports = countVowels;