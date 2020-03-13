const findLadders = require('./word-ladder.js');

test('check code with zero ', () => {
  expect(findLadders()).toBe('begin word is required');
});