"""
https://github.com/cherokee-rose
https://leetcode.com/problems/sliding-window-maximum/

You are given an array of integers nums, there is a sliding window of size k which is moving 
from the very left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:

    Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
    Output: [3,3,5,5,6,7]
    Explanation: 
    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
Example 2:
    Input: nums = [1], k = 1
    Output: [1]

Constraints:
    * 1 <= nums.length <= 10^5
    * -10^4 <= nums[i] <= 10^4
    * 1 <= k <= nums.length
"""


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        indexQ = deque()
        valQ = deque()

        res = []
        for i, n in enumerate(nums):
            while valQ and n > valQ[-1]:
                valQ.pop()
                indexQ.pop()
            valQ.append(n)
            indexQ.append(i)

            while i - indexQ[0] + 1 > k:
                valQ.popleft()
                indexQ.popleft()
            if i + 1 >= k:
                res.append(valQ[0])
        return res
