// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function create2DArray(length){
   const array = [];
   for (let i = 0; i < length; i++) {
    array.push([]);
   };
   return array;
};

function matrix(n) {
  const matrixArr = create2DArray(n);
  let i = 1;
  const rowBegin = 0, rowEnd = (n - 1);
  const colBegin = 0, colEnd = (n - 1);
  let direction = "right";
  let row = 0, col = 0;

  while (i <= n * n) {
    switch (direction) {
      case "right":
        if (col === colEnd || matrixArr[row][col + 1]) {
          matrixArr[row][col] = i;
          direction = "down";
          row++;
        } else {
          matrixArr[row][col] = i;
          col++;
        };
        break;
      case "down":
        if (row === rowEnd || matrixArr[row + 1][col]) {
          matrixArr[row][col] = i;
          direction = "left";
          col--;
        } else {
          matrixArr[row][col] = i;
          row++;
        };
        break;
      case "left":
        if (col === colBegin || matrixArr[row][col - 1]) {
          matrixArr[row][col] = i;
          direction = "up";
          row--;
        } else {
          matrixArr[row][col] = i;
          col--;
        };
        break;
      case "up":
        if (row === rowBegin || matrixArr[row - 1][col]) {
          matrixArr[row][col] = i;
          direction = "right";
          col++;
        } else {
          matrixArr[row][col] = i;
          row--;
        };
        break;
      default:
        break;
    }
    i++;
  };
  return matrixArr;
};

module.exports = matrix;
