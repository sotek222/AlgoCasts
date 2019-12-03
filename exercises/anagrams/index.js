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

function removePunctuation(str) {
  return str.replace(/[^\w]/g, "");
}

function anagrams(stringA, stringB) {
  const objA = {};
  const objB = {};
  let stripStringA = removePunctuation(stringA).toLowerCase();
  let stripStringB = removePunctuation(stringB).toLowerCase();

  if (stripStringA.length === stripStringB.length) {
    for (let i = 0; i < stripStringA.length; i++) {
      objA[stripStringA[i]] = objA[stripStringA[i]] + 1 || 1;
      objB[stripStringB[i]] = objB[stripStringB[i]] + 1 || 1;
    }

    for (let letter in objA) {
      if (objA[letter] !== objB[letter]) return false;
      return true;
    }
  } else {
    return false;
  }
}

module.exports = anagrams;
