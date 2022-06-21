"""
https://github.com/cherokee-rose
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
 
Example 1:
    Input: s = "()"
    Output: true
    
Example 2:
    Input: s = "()[]{}"
    Output: true
    
Example 3:
    Input: s = "(]"
    Output: false
    
Constraints:
    * 1 <= s.length <= 10^4
    * s consists of parentheses only '()[]{}'.
"""


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            if ch in ['(', '[', '{']:
                stack.append(ch)
            elif len(stack) == 0 or \
                    len(stack) > 0 and stack.pop() + ch not in ['()', '[]', '{}']:
                return False

        return len(stack) == 0
