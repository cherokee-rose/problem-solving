/*
  https://guthub.com/cherokee-rose
  https://leetcode.com/problems/group-anagrams/

  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
  typically using all the original letters exactly once.

  Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 
    
  Example 2:
    Input: strs = [""]
    Output: [[""]]

  Example 3:
    Input: strs = ["a"]
    Output: [["a"]]
    
  Constraints:
    * 1 <= strs.length <= 10^4
    * 0 <= strs[i].length <= 100
    * strs[i] consists of lowercase English letters.
*/

/* 
  The idea is to construct a map with key being an array of counts
  of letters in a string and the value being a group of string that has the same 
  count pattern.

  Time complexity: O(n * m)
  Space complexity: O(n)
*/
function groupAnagrams(strs: string[]): string[][] {
  let hashMap: { [count: string]: string[] } = {};

  for (let i = 0; i < strs.length; i += 1) {
    // Construct the key
    let count: any = new Array(26);
    count.fill(0);
    for (let j = 0; j < strs[i].length; j += 1) {
      count[strs[i].charCodeAt(j) - 97] += 1;
    }

    // Update the map
    count = count.toString();
    if (hashMap[count] === undefined) {
      hashMap[count] = [strs[i]];
    } else {
      hashMap[count].push(strs[i]);
    }
  }

  return Object.values(hashMap);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
