// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Questions for interviewer: 
// 1. Can we always assume array will have a length greater than 0?
// 2. Can we assume that size will always be greater than 0? 
// 3. Does it matter if we are destructive to the original array?

// Solution #4:
function chunk(array, size) {
  const chunked = [];
// We iterate and increment by the input size.
// this allows us to stop at each point for the slice method to start at.
// and where we need the slice method to stop at as well.
  for(let i = 0; i < array.length; i += size){
    chunked.push(array.slice(i, i + size))
  };

  return chunked;
};


module.exports = chunk;

// Solution #1:
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

// Solution #2:
// function chunk(array, size) {
//   // we create an empty array to store out chunks 
//   const chunkArr = [];
//   array.forEach(ele => {
//   // We find the last element in the chunkArr.
//     const last = chunkArr[chunkArr.length - 1];
//     //  If the last element does not exist or its length is the size input
//     if(!last || last.length === size){
//    //  push a new array literal into the chunk array, with the current ele inside
//       chunkArr.push([ele]);
//     } else {
//       // other wise if we find last or its not at the right size, push the curent
//       // ele into last.
//       last.push(ele);
//     }
//   });
//   return chunkArr;
// };

// Solution #3:
// function chunk(array, size) {
//   return array.reduce((chunkArr, cv) => {
//     const last = chunkArr[chunkArr.length - 1];
//     if(!last || last.length === size){
//       chunkArr.push([cv]);
//     } else {
//       last.push(cv);
//     }
//     return chunkArr;
//   }, []);
// };