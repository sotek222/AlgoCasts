/*
 * Given an array of numbers, only one number is repeated an odd number
 * of times. Return that number. You can assume all numbers are positive.
 * You can also assume only one number occurs an odd number of times.
 */

function oddOccurrence(arr) {
  const obj = {};
  let oddNum = 0;
  for (let num of arr) {
    obj[num] = obj[num] + 1 || 1;
    if (obj[num] % 2 !== 0) {
      oddNum = num;
    }
  }
  return oddNum;
}

module.exports = oddOccurrence;
