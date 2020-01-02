// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {
  function buildSequence(n, prev, current){
    if (n === 1) {
      return current;
    };
    const next = prev  + current;
    prev = current;
    return buildSequence(n - 1, prev, next);
  };

  return buildSequence(n, 0, 1);
};



module.exports = fib;

// Solution #1:
// function fib(n) {
//   const sequence = [0, 1];

//   for (let i = 0; i < n; i++) {
//     const nextVal = sequence[i] + sequence[i + 1];
//     sequence.push(nextVal);
//   };

//   return sequence[n];
// };