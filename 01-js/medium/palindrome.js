/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 0) return true;
  let l = 0;
  let r = 0;
  for (let i = 0; i <= str.length / 2; ) {
    if (
      str[i + l] == " " ||
      str[i + l] == "'" ||
      str[i + l] == '"' ||
      str[i + l] == "?" ||
      str[i + l] == "," ||
      str[i + l] == "." ||
      str[i + l] == "!"
    ) {
      l++;
      continue;
    }
    if (
      str[str.length - i - 1 - r] == " " ||
      str[str.length - i - 1 - r] == "'" ||
      str[str.length - i - 1 - r] == '"' ||
      str[str.length - i - 1 - r] == "?" ||
      str[str.length - i - 1 - r] == "," ||
      str[str.length - i - 1 - r] == "." ||
      str[str.length - i - 1 - r] == "!"
    ) {
      r++;
      continue;
    }
    if (str[i + l].toLowerCase() != str[str.length - i - 1 - r].toLowerCase())
      return false;
    i++;
  }
  return true;
}

module.exports = isPalindrome;
