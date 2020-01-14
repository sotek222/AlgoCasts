// --- Directions
// given an arr of integers
// return an arr where each element is the product of all the other numbers aside from itself
// --- Examples:
// productExceptSelf([1,2,3,4])
// output: [24,12,8,6]


function productExceptSelf(arr){
  const productArr = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if(j !== i){
        product *= arr[j];
      }
    }
    productArr.push(product);
    product = 1;
  }

  return productArr;
};

module.exports = productExceptSelf

// Solution #1: 
function productExceptSelf(arr) {
  const productArr = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product *= arr[j];
      }
    }
    productArr.push(product);
    product = 1;
  }

  return productArr;
};
