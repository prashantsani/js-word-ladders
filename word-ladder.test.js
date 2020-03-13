const findLadders = require('./word-ladder.js');

test('check code with zero ', () => {
  expect(findLadders()).toBe('beginWord and endWord is required');
});

test('testing if beginWord and endWord are strings', () => {
  expect(findLadders([],{},[])).toBe('beginWord and endWord must be of type string');
});

test('check when beginWord and endWord are same', () => {
  expect(findLadders('cat','cat')).toBe('beginWord and endWord are same');
});

test('when beginWord and endWord have differnt lengths', () => {
  expect(findLadders('cat','disney',[])).toBe('beginWord and endWord must have same lengths');
});

test('incorrect word list ', () => {
  expect(findLadders('cat','dog',[])).toBe('incorrect wordList');
});

test('First example  ', () => {
  expect(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"])).toEqual(  
    expect.arrayContaining(["hit", "hot", "lot", "log", "cog"])
  )
});



