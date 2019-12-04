// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
// function reverse(str) {
//   let revStr = "";

//   for (const char of str) {
//     revStr = char + revStr;
//   };

//   return revStr;
// };

// solution #2
// function reverse(str) {
//   return str.split("")
//   .reduce((acc, cv) => {
//       acc.unshift(cv);
//       return acc;
//     }, [])
//   .join("");
// };

// solution #3
function reverse(str) {
  let revStr = "";

  for(let i = (str.length - 1); i >= 0; i--){
    revStr += str[i];
  };
  return revStr;
};

module.exports = reverse;
