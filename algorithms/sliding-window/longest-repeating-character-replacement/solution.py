"""
https://github.com/cherokee-rose
https://leetcode.com/problems/longest-repeating-character-replacement/

You are given a string s and an integer k. You can choose any 
character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.
 
Constraints:
    * 1 <= s.length <= 10^5
    * s consists of only uppercase English letters.
    * 0 <= k <= s.length
"""


class Solution(object):
    def characterReplacement(self, s, k):
        max_len = 0
        l = 0
        topFreq = 0
        count = {}

        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            topFreq = max(topFreq, count[s[r]])

            while (r - l + 1) - topFreq > k:
                count[s[l]] -= 1
                l += 1

            max_len = max(max_len, r - l + 1)

        return max_len
