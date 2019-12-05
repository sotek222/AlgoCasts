// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Questions: 
// 1. Are we counting non alphanumeric characters?
// 2. Should we alway expect the input to be a string, or can it 

// Solution #1:
function maxChar(str) {
  const charMap = new Map();

  for (const char of str) {
    charMap[char] ? charMap[char] += 1 : charMap[char] = 1;
  };

  let max = "";

  for (const char in charMap) {
    if (charMap[char] > charMap[max] || max === "") max = char;
  };

  return max;
};  

module.exports = maxChar;