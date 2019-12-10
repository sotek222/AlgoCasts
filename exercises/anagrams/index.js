// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// anagrams('RAIL! SAFETY!', 'fairy tales')

// Solution #3:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
};

function cleanString(str){
  return str.replace(/\W+/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const mapA = new Map(), mapB = new Map();
//   const cleanStrA = stringA.replace(/\W+/g, "").toLowerCase();
//   const cleanStrB = stringB.replace(/\W+/g, "").toLowerCase();

//   if (cleanStrA.length !== cleanStrB.length) return false;

//   for (const char of cleanStrA) {
//     mapA[char] = mapA[char] + 1 || 1;
//   };
//   for (const char of cleanStrB) {
//     mapB[char] = mapB[char] + 1 || 1;
//   };

//   let anagram = true;

//   for (const char in mapA) {
//     if (!mapB.hasOwnProperty(char) || mapB[char] !== mapA[char]) {
//       anagram = false;
//       break;
//     };
//   };
//   return anagram;
// };

// Solution #2:
// function anagrams(stringA, stringB) {
//   const mapA = new Map();
//   const cleanStrA = stringA.replace(/\W+/g, "").toLowerCase();
//   const cleanStrB = stringB.replace(/\W+/g, "").toLowerCase();
//   if (cleanStrA.length !== cleanStrB.length) return false;

//   for (const char of cleanStrA) {
//     mapA[char] = mapA[char] + 1 || 1;
//   };

//   for (const char of cleanStrB) {
//     if (mapA.hasOwnProperty(char) && mapA[char] > 0) {
//       mapA[char]--;
//     } else {
//       return false;
//     };
//   };

//   return Array.from(mapA.values()).every(num => num === 0);
// };
