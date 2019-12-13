const countAndSay = require('./index');

test('function countAndSay exists', () => {
  expect(typeof countAndSay).toEqual('function');
});

test('countAndSay returns the base case', () => {
  expect(countAndSay(1)).toEqual("1");
});

test('countAndSay counts to 2', () => {
  expect(countAndSay(2)).toEqual("11");
});

test('countAndSay counts to 3', () => {
  expect(countAndSay(3)).toEqual("21");
});

test('countAndSay counts to 4', () => {
  expect(countAndSay(4)).toEqual("1211");
});

test('countAndSay counts to 5', () => {
  expect(countAndSay(5)).toEqual("111221");
});

test('countAndSay counts to 6', () => {
  expect(countAndSay(6)).toEqual("312211");
});
