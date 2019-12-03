// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// The array becomes an array of arrays, so, we can use reduce which can be
// thought of as a way to make something larger into something that is "reduce"d in size
function chunk(array, size) {
  // in the reduce callback we need the subarray which = [] (which is what we are building towards),
  // we also need the array elements, and finally we need the index to measure against the size.
  return array.reduce((subArray, element, i) => {
    // now we want to check the index against the size
    // [1,2,3,4,5]
    //  0 1 2 3 4
    if ((i + size) % size === 0) {
      subArray.push([element]);
    } else {
      subArray[subArray.length - 1].push(element);
    }
    return subArray;
  }, []);
}

module.exports = chunk;
