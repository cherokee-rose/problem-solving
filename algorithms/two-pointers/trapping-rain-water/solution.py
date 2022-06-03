"""
https://github.com/cherokee-rose
https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
 
Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
    In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
    * n == height.length
    * 1 <= n <= 2 * 10^4
    * 0 <= height[i] <= 10^5
"""


class Solution(object):
    def trap(self, height):
        total_water = 0
        to_subtract = 0
        l, r = 0, 1

        # From the start
        while r < len(height):
            if height[r] >= height[l]:
                total_water += (r - l - 1) * height[l] - to_subtract
                to_subtract = 0
                l = r
            else:
                to_subtract += height[r]
            r += 1

        highest = l # Copy the pointer of the max value
        l, r = len(height) - 2, len(height) - 1
        to_subtract = 0
        
        # From the end
        while l >= highest:
            if height[l] >= height[r]:
                total_water += (r - l - 1) * height[r] - to_subtract
                to_subtract = 0
                r = l
            else:
                to_subtract += height[l]
            l -= 1

        return total_water
