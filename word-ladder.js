/**
* @param {string} beginWord
* @param {string} endWord
* @param {string[]} wordList
* @return {string[][]}
*/


var findLadders = function(beginWord, endWord, wordList) {
  if( beginWord ==='' || beginWord===undefined || beginWord===null || beginWord===[] ||
      endWord ==='' || endWord===undefined || endWord===null || endWord===[]
    ){
    return 'beginWord and endWord is required';
  }

  if(typeof(beginWord)!=='string' || typeof(endWord)!=='string'){
    return 'beginWord and endWord must be of type string';
  }

  if(beginWord == endWord){
    return 'beginWord and endWord are same';
  }

  if(beginWord.length !== endWord.length){
    return 'beginWord and endWord must have same lengths';
  }

  if(!Array.isArray(wordList) || wordList.length===0){
    return 'incorrect wordList';
  }

  // https://oj.leetcode.com/problems/word-ladder/
  function replaceChar(str, index, character) {
    return str.substr(0, index) + character + str.substr(index + 1);
  }

  function ladderLength(start, end, dict) {
    var dictTable = {};
    var endTable = {};

    for (var j = 0; j < end.length; j++) {
      endTable[replaceChar(end, j, '?')] = i;
    }

    for (var i = 0; i < dict.length; i++) {
      for (var j = 0; j < dict[i].length; j++) {
        dictTable[replaceChar(dict[i], j, '?')] = i;
      }
    }

    function solve(str, solutions) {
      var min = Infinity;
      var minSolution = null;

      for (var j = 0; j < str.length; j++) {
        var strKey = replaceChar(str, j, '?');

        if (strKey in endTable) {
          
          solutions.push(end);
          return solutions;
          
        } else if (strKey in dictTable && solutions.indexOf(dict[dictTable[strKey]]) === -1) {
          console.log(solutionsCopy)
          var solutionsCopy = solutions.slice();
          solutionsCopy.push(dict[dictTable[strKey]]);
          var parts = solve(dict[dictTable[strKey]], solutionsCopy);
          
          if (parts !== null && parts.length < min) {
            min = parts.length;
            minSolution = parts;
            
          }
          
        }
      }
      return minSolution;
    }


    var parts = solve(start, [start]);
    
    return parts;
  }

  return ladderLength(beginWord,endWord,wordList);

}



module.exports = findLadders;