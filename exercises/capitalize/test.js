const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

test('does not capitalize every letter', () => {
  expect(capitalize('hello world!')[1]).toEqual('e');
});

test('does not capitalize already capitalized words', () => {
  expect(capitalize('Javascript is cool')).toEqual('Javascript Is Cool');
});

test('does not capitalize non-alphanumeric characters', () => {
  expect(capitalize('! wow thats not a letter!')).toEqual('! Wow Thats Not A Letter!');
});
