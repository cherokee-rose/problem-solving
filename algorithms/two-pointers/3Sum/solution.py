"""
https://github.com/cherokee-rose
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

Example 2:
    Input: nums = []
    Output: []

Example 3:
    Input: nums = [0]
    Output: []
 
Constraints:
    0 <= nums.length <= 3000
    -10^5 <= nums[i] <= 10^5
"""

from asyncio import constants
from copy import copy


class Solution(object):
    def threeSum(self, nums):
        sorted_nums = sorted(nums)
        if len(sorted_nums) < 3 or sorted_nums[0] ^ sorted_nums[-1] > 0:
            return []

        triplets = set()
        l = 0
        hash_set = set()
        while sorted_nums[l] < 0:
            r = len(sorted_nums) - 1
            third_value = 0 - (sorted_nums[l] + sorted_nums[r])

            while third_value <= sorted_nums[-1] and l < r:
                if third_value in hash_set:
                    triplet = tuple(
                        sorted([sorted_nums[l], third_value, sorted_nums[r]]))
                    if triplet not in triplets:
                        triplets.add(triplet)
                else:
                    hash_set.add(sorted_nums[r])

                r -= 1
                third_value = 0 - (sorted_nums[l] + sorted_nums[r])

            hash_set = set()
            l += 1

        if sorted_nums[l] == 0 \
           and l + 2 < len(sorted_nums) \
           and sorted_nums[l + 2] == 0:
            triplets.add(tuple([0, 0, 0]))

        return list(triplets)
        