// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// start with leading 0, gets interpreted as octal by JS.
function reverseInt(n) {
  let strNum = n.toString();
  let newStr = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
    strNum[i] === "-" ? (newStr = strNum[i] + newStr) : (newStr += strNum[i]);
  }
  return parseInt(newStr);
}

module.exports = reverseInt;
