const bsz = require('./index');

test('expects bsz to exist', () => {
  expect(typeof bsz).toEqual('function');
});

test('can handle an array with zeros all in front', () => {
  expect(bsz([0,0,0,1,2,3])).toEqual([1,2,3,0,0,0]);
});

test('can handle an array with zeros as every other', () => {
  expect(bsz([0, 1, 0, 2, 0, 3])).toEqual([1, 2, 3, 0, 0, 0]);
});

test('can handle an array with zeros in random order', () => {
  expect(bsz([1, 0, 2, 3, 0, 4, 0, 0, 5])).toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0]);
});

test('keeps order of non-zeros the same', () => {
  expect(bsz([99, 0, 8, 0, 0, 10, 0, 12, 0, 5])).toEqual([99, 8, 10, 12, 5, 0, 0, 0, 0, 0]);
});