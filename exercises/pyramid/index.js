// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n) {
  const width = n + (n - 1);

  for(let i = 0, spaces = (n - 1); i < n; i++, spaces--){
    const step = [];

    step.unshift(" ".repeat(spaces));
    step.push("#".repeat(width - (spaces * 2)));
    step.push(" ".repeat(spaces));
    
    console.log(step.join(""))
  }
};

module.exports = pyramid;

// Solution 1:
// function pyramid(n) {
//   // first we get the total width of the pyramid, which is equal to its final step.
//   // ex. n = 2, so width = 2 + (2 - 1);
//   const width = n + (n - 1);

//   // We then iterate from 0 to n
//   // We also initialize a variable spaces = to the number of (steps - 1)
//   // this determines the starting number of spaces to generate on each side of the pyramid
//   // We reduce this number by 1 each time.
//   for (let i = 0, spaces = (n - 1); i < n; i++ , spaces--) {
//     // We start with an empty array called step which will keep track of what 
//     // our current step looks like.
//     const step = [];

//     // we then add the current amount of spaces to the front of the array
//     step.unshift(" ".repeat(spaces));
//     // we then push on the current number of # into the array
//     // the number of # is determines by taking the final width - the current number of spaces
//     // times 2(to represent each side of space) 
//     step.push("#".repeat(width - (spaces * 2)));
//     // we then add the current number of spaces to the back of the array.
//     step.push(" ".repeat(spaces));
//     // Finally,  we log, the current step joined as a string to the console.
//     console.log(step.join(""))
//   }
// };
