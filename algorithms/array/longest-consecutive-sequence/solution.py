"""
https://github.com/cherokee-rose
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
    
Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9
 
Constraints:
    * 0 <= nums.length <= 10^5
    * -10^9 <= nums[i] <= 10^9
"""

# The idea is to create a hash-table of elements.
# Then, iterate over the given array, and on each nums[i] element map
# nums[i] + j and nums[i] - j elements.
from logging.config import dictConfig
from threading import local


class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Consturct the table
        table = {}
        for n in nums:
            table.update({n: n})

        localMax = 1 if len(nums) >= 1 else 0
        globalMax = localMax
        keys = list(table.keys())

        # Map the elements
        for i in range(0, len(keys)):
            if keys[i] not in table:
                continue
            
            j = 1
            while keys[i] + j in table:
                table.pop(keys[i] + j)
                localMax += 1
                j += 1
                
            j = 1
            while keys[i] - j in table:
                table.pop(keys[i] - j)
                localMax += 1
                j += 1

            table.pop(keys[i])
            globalMax = max(globalMax, localMax)
            localMax = 1

        return globalMax
