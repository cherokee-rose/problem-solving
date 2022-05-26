"""
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    
Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
    * 0 <= s.length <= 5 * 10^4
    * s consists of English letters, digits, symbols and spaces.
"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_dict = {}
        l = 0
        max_len = 0

        for r in range(0, len(s)):
            if s[r] in char_dict and char_dict[s[r]] >= l:
                l = char_dict[s[r]] + 1

            char_dict[s[r]] = r
            max_len = max(max_len, r - l + 1)

        return max_len
