// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let maxChar = "";
  let maxCount = 0;
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;

    if (obj[char] > maxCount) {
      maxCount = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   const chars = {};
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   return Object.keys(chars)
//     .sort((a, b) => chars[a] - chars[b])
//     .pop();
// }
// function maxChar(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   return Object.keys(obj)
//     .sort((a, b) => obj[a] - obj[b])
//     .pop();
// }
