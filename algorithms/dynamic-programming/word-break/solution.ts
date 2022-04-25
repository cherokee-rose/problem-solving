/*
  https://leetcode.com/problems/word-break/
  https://github.com/cherokee-rose

  Given a string s and a dictionary of strings wordDict, 
  return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

  Example 1:
    Input: s = "leetcode", wordDict = ["leet","code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".

  Example 2:
    Input: s = "applepenapple", wordDict = ["apple","pen"]
    Output: true
    Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
    Note that you are allowed to reuse a dictionary word.

  Example 3:
    Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
    Output: false

  Constraints:
    * 1 <= s.length <= 300
    * 1 <= wordDict.length <= 1000
    * 1 <= wordDict[i].length <= 20
    * s and wordDict[i] consist of only lowercase English letters.
    * All the strings of wordDict are unique.
*/

function wordBreak(s: string, wordDict: string[]): boolean {
    let dictionary: {[word: string]: boolean} = {};
    
    // Initialize the dictinary for a constant look-up
    for (let i = 0; i < wordDict.length; i += 1) {
      dictionary[wordDict[i]] = true;
    }
      
    return segment(s, dictionary, {});
  };
  
  function segment(
                   str: string, 
                   dict: {[word: string]: boolean}, 
                   cache: {[sub: string]: boolean}): boolean {
    if (str === '') {
      return true;
    }
                       
    if (cache[str]) {
      return false;
    }
     
    cache[str] = true; // store it
    for (let i = str.length; i >= 0; i -= 1) { // it's better to match the whole string first
      if (dict[str.slice(0, i)] && segment(str.slice(i), dict, cache)) {
        return true;
      }
    }
      
    return false;
  }

console.log(wordBreak('leetcode', ['leet', 'code']));