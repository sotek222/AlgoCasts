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
  function buildStep(n, s){
    if (n === 0) {
      return;
    };
    buildStep(n - 1, s);
    let stair = "#".repeat(n) + " ".repeat(s).slice(n);
    console.log(stair);
  };

  buildStep(n, n)
};

module.exports = steps;

// Solution #1:
// function steps(n) {
//   const stair = new Array(n).fill(" ");

//   for (let i = 0; i < n; i++) {
//     stair.unshift("#");
//     stair.pop();
//     console.log(stair.join(""));
//   };
// };

// Solution #2:
// function steps(n) {
//   let stair = " ".repeat(n);

//   for (let i = 0; i < n; i++) {
//     stair = "#" + stair;
//     console.log(stair.slice(0, n));
//   };
// };

// Solution #3:
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair = "#" + stair;
//       } else {
//         stair = stair + " ";
//       }
//       console.log(stair);
//     };
//   };
// };