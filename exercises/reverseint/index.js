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

// 1. Numbers with trailing 0's, lose the 0's when reversed.
// 2. Negative numbers remain negative on reversal.

// Solution #3:
function reverseInt(n) {
  const numStr = n
    .toString()
    .split('')

  const reverse =  numStr.reduce((acc, cv) => {
    acc.unshift(cv) 
    return acc
  }, [])
  .join('');

  return Math.sign(n) * parseInt(reverse);
};

module.exports = reverseInt;

// Solution #1:
// function reverseInt(n) {
//   const arr = n.toString().split('');
//   let negative = n < 0 ? arr.shift() : null;

//   const revArr = arr.reduce((acc, cv) => {
//     acc.unshift(cv);
//     return acc;
//   }, []);

//   if (negative) revArr.unshift(negative);
//   return Number(revArr.join(''));
// };

// Solution #1 (slight revision):
// function reverseInt(n) {
//   const arr = n.toString().split('');

//   const revArr = arr.reduce((acc, cv) => {
//     acc.unshift(cv);
//     return acc;
//   }, []);

//   if (n < 0) revArr.unshift(revArr.pop());
//   return Number(revArr.join(''));
// };