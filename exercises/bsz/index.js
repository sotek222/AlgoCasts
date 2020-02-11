// --- Directions
// Given an arr of integers, return an array with all zeroes positioned 
// behind all non-zero integers.
// --- Examples: 
// backShiftZeroes([0,0,0,1,2,3]) => [1,2,3,0,0,0]
// backShiftZeroes([0,-2,0,3,4,0,0,1]) => [-2,3,4,1,0,0,0,0]

function backShiftZeroes(arr){
  return [...arr.filter(n => n !== 0), ...arr.filter(n => n == 0)];
};

module.exports = backShiftZeroes;

// Solution #1: 
// function backShiftZeroes(arr) {
//   const zeroes = [];
//   const nonZeroes = [];

//   arr.forEach((number) => {
//     if (number === 0) {
//       zeroes.push(number);
//     } else {
//       nonZeroes.push(number);
//     };
//   });
//   return [...nonZeroes, ...zeroes];
// };
