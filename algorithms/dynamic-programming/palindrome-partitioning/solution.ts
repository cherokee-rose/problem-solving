/*
  https://leetcode.com/problems/palindrome-partitioning/
  https://github.com/cherokee-rose

  Given a string s, partition s such that every substring of the partition is a palindrome. 
  Return all possible palindrome partitioning of s.

  A palindrome string is a string that reads the same backward as forward.

  Example 1:
    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]

  Example 2:
    Input: s = "a"
    Output: [["a"]]
 
  Constraints:
    * 1 <= s.length <= 16
    * s contains only lowercase English letters.
*/

function partition(s: string): string[][] {
  let dp: string[][] = [[s.slice(-1)]];
  let len = 0; // stores the length of dp before
  let char = ''; // stores a current character
  let sub: string[]; // stores a current subarray

  for (let i = s.length - 2; i >= 0; i -= 1) {
    len = dp.length;
    char = s.charAt(i);

    for (let j = 0; j < len; j += 1) {
      sub = Array.from(dp[j]);

      // Separate
      // s[i] = 'a'
      // dp[j] = ['aa']
      // dp[j] = ['a', 'aa']
      if (isPalindrome(sub[0])) {
        dp[j] = [char].concat(Array.from(sub));
      } else {
        dp = dp.slice(0, j).concat(dp.slice(j + 1)); // Remove it
        j -= 1;`
        len -= 1;`
      }

      // Append
      // s[i] = 'a'
      // dp[j] = ['aa']
      // do[j] = ['aaa']
      if (i > 0 || isPalindrome(char + sub[0])) {
        sub[0] = char + sub[0];
        dp.push(Array.from(sub));
      }
    }
  }

  return dp;
}

function isPalindrome(str: string): boolean {
  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

console.log(partition('abbab'));