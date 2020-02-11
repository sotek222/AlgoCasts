function bsz(arr){
  return [...arr.filter(n => n !== 0), ...arr.filter(n => n == 0)];
};

module.exports = bsz;

// Solution #1: 
// function bsz(arr) {
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
