# js-word-ladders

Please use Javascript to solve the following problem: 

Design a micro service that accepts two words (beginWord and endWord), and a dictionary's word list to find all shortest transformation sequence(s) from beginWord to endWord, such that:

- Only one letter can be changed at a time
- Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

#### Example 1 
```javascript

// Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

// Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]

```

#### Example 2 
```javascript

// Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

// Output: []

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

```


## How to use this repo

- Use command npm install to install the dependencies
- I have used JEST for testing. You can read all about [JEST here](https://jestjs.io/docs/en/getting-started)
- Run yarn test or npm run test and Jest will test the app
- the test file is /search-utility-function/search_summaries.test.js

