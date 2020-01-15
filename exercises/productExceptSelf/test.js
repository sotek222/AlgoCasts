const productExceptSelf = require('./index');

test('productExceptSelf is a function', () => {
  expect(typeof productExceptSelf).toEqual('function');
});

test('productExceptSelf returns array', () => {
  expect(Array.isArray(productExceptSelf([1,2,3,4]))).toEqual(true);
});

describe('productExceptSelf returns correct products', () => {
  test('returns correct product of [1,2,3,4]', () => {
    const product = productExceptSelf([1, 2, 3, 4]);
    expect(product).toEqual([24, 12, 8, 6]);
  });

  test('returns correct product of [7,5,8,9]', () => {
    const product = productExceptSelf([7, 5, 8, 9]);
    expect(product).toEqual([360, 504, 315, 280]);
  });

  test('returns correct product of [5,15,2,7,1]', () => {
    const product = productExceptSelf([5, 15, 2, 7, 1]);
    expect(product).toEqual([210, 70, 525, 150, 1050]);
  });
});

test('productExceptSelf works with only two numbers', () => {
  const product = productExceptSelf([3, 8])
  expect(product).toEqual([8, 3]);
});

test('productExceptSelf works with large numbers', () => {
  const product = productExceptSelf([100, 150, 300, 420]);
  expect(product).toEqual([18900000, 12600000, 6300000, 4500000]);
});

