"""
https://github.com/cherokee-rose
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, 
return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
A substring is a contiguous sequence of characters within the string.

Example 1:
    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"
    Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
    Input: s = "a", t = "a"
    Output: "a"
    Explanation: The entire string s is the minimum window.

Example 3:
    Input: s = "a", t = "aa"
    Output: ""
    Explanation: Both 'a's from t must be included in the window.
    Since the largest window of s only has one 'a', return empty string.
 
Constraints:
    * m == s.length
    * n == t.length
    * 1 <= m, n <= 10^5
    * s and t consist of uppercase and lowercase English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
"""


class Solution(object):
    def minWindow(self, s, t):
        sCount = [0] * 52
        tCount = [0] * 52

        for i in range(len(t)):
            sIndex = 26 + ord(s[i]) - 97 if ord(s[i]) > 96 else ord(s[i]) - 65
            tIndex = 26 + ord(t[i]) - 97 if ord(t[i]) > 96 else ord(t[i]) - 65

            sCount[sIndex] += 1
            tCount[tIndex] += 1

        matches = 0
        for i in range(52):
            if tCount[i] > 0 and sCount[i] > 0:
                matches += min(sCount[i], tCount[i])

        result = ''
        l = 0
        for r in range(len(t), len(s)):
            index = 26 + ord(s[r]) - 97 if ord(s[r]) > 96 else ord(s[r]) - 65
            sCount[index] += 1
            if tCount[index] > 0 and sCount[index] <= tCount[index]:
                matches += 1

            while matches == len(t):
                result = s[l:r + 1] if r - \
                    l < len(result) or result == '' else result
                index = 26 + ord(s[l]) - 97 if ord(s[l]
                                                   ) > 96 else ord(s[l]) - 65
                if tCount[index] > 0 and sCount[index] - 1 < tCount[index]:
                    matches -= 1
                sCount[index] -= 1
                l += 1

        return result

print(Solution().minWindow("ADOBECODEBANC", "ABC"))