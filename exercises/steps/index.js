// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    const stair = [];
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        stair.push("#");
      } else {
        stair.push(" ");
      }
    }
    console.log(stair.join(""));
  }
}

module.exports = steps;

// Solution 1

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     const stair = [];
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair.push("#");
//       } else {
//         stair.push(" ");
//       }
//     }
//
//     console.log(stair.join(""));
//   }
// }

// Solution 2

// function steps(n) {
//   const stairCase = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stairCase.push("#");
//       } else {
//         stairCase.push(" ");
//       }
//     }
//     console.log(stairCase.slice(i * n).join(""))
//   }
// }

// Ethan Solution:

// function steps(n) {
//  const array = new Array(n).fill(' ');
// ​
//  for (let i = 0; i < n; i++) {
//   array[i] = '#';
//   console.log(array.join(''));
//  }
// }
