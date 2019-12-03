const oddOccurrence = require('./index');

test('oddOccurrence function exists', () => {
  expect(oddOccurrence).toBeDefined();
});

test('oddOccurrence handles [1, 2, 2, 1, 4, 1, 4]', () => {
  expect(oddOccurrence([1, 2, 2, 1, 4, 1, 4])).toEqual(1);
});

test('oddOccurrence handles [5, 5, 5, 1, 2, 2, 5, 2]', () => {
  expect(oddOccurrence([5, 5, 5, 1, 2, 2, 5, 2, 1])).toEqual(2);
});

test('oddOccurrence handles [5]', () => {
  expect(oddOccurrence([5])).toEqual(5);
});
