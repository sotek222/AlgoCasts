// --- Directions
// 


// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Solution #2:
function levelWidth(root) {
  const results = [0];
  const queue = [root, "stop"];

  while(queue.length > 1){
    const node = queue.shift();
    
    if (node === "stop") {
      queue.push("stop");
      results.push(0);
    } else {
      results[results.length - 1]++;
      queue.push(...node.children);
    };
  };
  return results;
}

module.exports = levelWidth;
// Solution #1:
// function levelWidth(root) {
//   const results = [0];
//   const queue = [root, "stop"];

//   while (queue.length > 1) {
//     const node = queue.shift();
//     queue.push(...node.children);
//     results[level] = results[level] + 1;

//     if (queue[0] === "stop" && queue.length > 1) {
//       queue.push(queue.shift());
//       results.push(0);
//       level++;
//     };
//   };
//   return results;
// };