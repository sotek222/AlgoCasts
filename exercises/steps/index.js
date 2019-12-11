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
  for(let row = 0; row < n; row++){
    let stair = "";
    for (let col = 0; col < n; col++) {
      if(col <= row){
        stair = "#" + stair;
      } else {
        stair = stair + " ";
      }
    };
    console.log(stair);
  };
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