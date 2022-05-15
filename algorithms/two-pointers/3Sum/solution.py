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


class Solution(object):
    def threeSum(self, nums):
        hash_set = set()
        for n in nums: # O(n)
            hash_set.add(n)
        
        triplets = []

        if len(nums) >= 3 and hash_set == {0}:
            triplets.append(0)
            triplets.append(0)
            triplets.append(0)
        else:
            sorted_nums = sorted(nums) # O(n log n)
            l = 0
            while sorted_nums[l] <= 0: # O(n)
                r = len(sorted_nums) - 1
                third_value = 0 - (sorted_nums[l] + sorted_nums[r])

                while third_value > sorted_nums[l] and \
                      third_value < sorted_nums[r] and \
                      third_value in hash_set:
                      
                    

        return triplets   
        
                

print(Solution().threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))

"""
sorted = [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]


"""