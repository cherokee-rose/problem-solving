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

function groupAnagrams(strs: string[]): string[][] {
  let groups: string[][] = [[strs[0]]];

  // Iterate over given strings and check if
  // the given string is anagram of the first string of a group.
  // If so, add that string to the group; otherwise, create a new group
  // with the first string being that given string.
  
  for (let i = 1; i < strs.length; i += 1) { // O(n)
    for (let j = 0; j < groups.length; j += 1) { // O(n)
      if (isAnagram(strs[i], groups[j][0])) { // O(m)
        // matched
        groups[j].push(strs[i]);
        break;
      } else if (j === groups.length - 1) {
        // not match
        groups.push([strs[i]]);
        j += 1;
      }
    }
  }

  return groups;
}

// O(n)
function isAnagram(str: string, tested: string): boolean {
  if (str.length !== tested.length) {
    return false;
  }

  // Construct the map of characters of the second string
  let charMap: {[char: string]: number} = {};
  let char;
  for (let i = 0; i < tested.length; i += 1) {
    char = tested.charAt(i);

    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  // Match all the characters of the first string with
  // all the characters of the second string
  for (let i = 0; i < str.length; i += 1) {
    char = str.charAt(i);

    if (!charMap[char]) {
      return false;
    } else {
      charMap[char] -= 1;
    }
  }
  
  return true;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
