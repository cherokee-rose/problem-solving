/*
    https://leetcode.com/problems/rotate-array/
    https://github.com/cherokee-rose

    Given an array, rotate the array to the right by k steps, where k is non-negative.

    Example 1:
        Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
        Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example 2:
        Input: nums = [-1,-100,3,99], k = 2
        Output: [3,99,-1,-100]
        Explanation: 
            rotate 1 steps to the right: [99,-1,-100,3]
            rotate 2 steps to the right: [3,99,-1,-100]
        
    Constraints:
        * 1 <= nums.length <= 10^5
        * -2^31 <= nums[i] <= 2^31 - 1
        * 0 <= k <= 10^5

    Follow up:
        * Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
        * Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    /**
     * The idea here is simple: 
     * we're replacing an element nums[j + k] with the element nums[j], continuing doing so
     * until we have completed a cycle. For example, suppose nums = [1, 2, 3, 4, 5] and k = 1;
     * we start with the first element nums[0] = 1 replacing the element nums[0 + 1] = 2 and saving its value,
     * then we replace the element nums[1 + 1] = 3 with the previous saved value, we're continuing doing so 
     * until we come back to the starting point, hence, completing the cycle. If the number of replacements(jumps) is
     * equal to the length of the given array - we terminate the loop, if not we increment the starting point(i variable)
     * from which we start the new cycle.
     * 
     * Time complexity: O(n) - the number of replacements is equal to the length of the array
     * Space complexity: O(1) - we do not allocate extra space that depend on n
     */

    let jump = k % nums.length;
    if (jump == 0) {
        return;
    }

    let jumpCount = nums.length;
    let next = nums[0];
    let i = 0, j = jump;
    
    // There will be exactly 'nums.length' jumps
    while (jumpCount > 0) {
		// Swap the valuesg
        nums[j] ^= next;
        next ^= nums[j];
        nums[j] ^= next;

        // Completed the cycle
        if (j == i) {
            i += 1;
            j = i;
            next = nums[j];
        }

        // Increment by jump modulo the length of the array
        // If the j + jump is greater than the length
        // we're looping to the beginning
        j = (j + jump) % nums.length;
        jumpCount -= 1;
    }
};
