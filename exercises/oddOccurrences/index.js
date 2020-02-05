/*
Given an array of numbers, only one number is repeated an odd number
of times. Return that number. You can assume all numbers are positive.
You can also assume only one number occurs an odd number of times.
 */

function oddOccurrence(arr) {
  const occurences = {};

  arr.forEach(number => {
    occurences[number] = occurences[number] + 1 || 1;
  });

  for(let number in occurences){
    if (occurences[number] % 2 !== 0){
      return Number(number);
    };
  };

};

module.exports = oddOccurrence;
