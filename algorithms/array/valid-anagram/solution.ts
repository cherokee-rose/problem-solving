/*
  https://github.com/cherokee-rose
  https://leetcode.com/problems/valid-anagram/
  
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
  typically using all the original letters exactly once.

  Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

  Example 2:
    Input: s = "rat", t = "car"
    Output: false
    
  Constraints:
    * 1 <= s.length, t.length <= 5 * 10^4
    * s and t consist of lowercase English letters.
    
  Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  // Break down the 't' into a map
  let charMap: {[char: string]: number} = {};
  let char: string;
  for (let i = 0; i < t.length; i += 1) {
    char = t.charAt(i);
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  // Match each character of 's' with each character of 't'
  for (let j = 0; j < s.length; j += 1) {
    char = s.charAt(j);
    if (!charMap[char]) {
      return false;
    } else {
      charMap[char] -= 1;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));