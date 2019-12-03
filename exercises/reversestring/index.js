// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
function reverse(str) {
  let revStr = "";

  for (const char of str) {
    revStr = char + revStr;
  };

  return revStr;
};

module.exports = reverse;
