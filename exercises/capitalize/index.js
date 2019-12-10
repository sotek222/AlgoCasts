// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #2:
function capitalize(str) {
  let capStr = "";

  for (let i = 0; i < str.length; i++) {
    if(str[i - 1] === " " || i === 0) {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i]
    };
  };

  return capStr;
};

module.exports = capitalize;

// Solution #1:
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
// };