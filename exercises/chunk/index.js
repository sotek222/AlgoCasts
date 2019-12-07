// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkArr = [];
  let subArr = [];

  for(let i = 0; i < array.length; i++){
    subArr.push(array[i]);

    if(subArr.length === size || i === (array.length - 1)){
      chunkArr.push(subArr);
      subArr = [];
    }
  };

  return chunkArr;
};

module.exports = chunk;

// function chunk(array, size) {
//   // This array will store our chunks
//   const chunkArr = [];
//   // This binding will store the data of each chunk
//   let subArr = [];

//   for (let i = 0; i < array.length; i++) {
//     subArr.push(array[i]);

//     // If the subArr is at the right size or we are at the end of the loop
//     // push the subArr into the chunkArr
//     if (subArr.length === size || i === (array.length - 1)) {
//       chunkArr.push(subArr);
//       subArr = [];
//     }
//   };

//   return chunkArr;
// };