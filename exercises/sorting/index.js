// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < (arr.length - i); j++){
      if (arr[j] > arr[j + 1]) {
        const left = arr[j];
        const right = arr[j + 1];
        arr[j + 1] = left;
        arr[j] = right;

      };
    };
  };
  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let indexOfLowest = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[indexOfLowest] > arr[j]) indexOfLowest = j;
    };

    if(indexOfLowest !== i){
      const lowestNumber = arr[indexOfLowest];
      arr[indexOfLowest] = arr[i];
      arr[i] = lowestNumber;
    };
  };
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
