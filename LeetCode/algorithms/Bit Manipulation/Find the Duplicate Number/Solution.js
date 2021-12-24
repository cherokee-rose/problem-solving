/* 
    github.com/cherokee-rose
    https://leetcode.com/problems/find-the-duplicate-number

    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    There is only one repeated number in nums, return this repeated number.
    You must solve the problem without modifying the array nums and uses only constant extra space.

    Example 1:
        Input: nums = [1,3,4,2,2]
        Output: 2

    Example 2:
        Input: nums = [3,1,3,4,2]
        Output: 3

    Example 3:
        Input: nums = [1,1]
        Output: 1

    Example 4:
        Input: nums = [1,1,2]
        Output: 1
        
    Constraints:
        * 1 <= n <= 105
        * nums.length == n + 1
        * 1 <= nums[i] <= n
        * All the integers in nums appear only once except for precisely one integer which appears two or more times.
 
    Follow up:
        * How can we prove that at least one duplicate number must exist in nums?
        * Can you solve the problem in linear runtime complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    function binarySearch() {
        // O(n log n)

        let count = 0;
        let start = 1;
        let end = nums.length - 1
        let mid, answer;

        while (start < end) {
            mid = Math.floor((start + end) / 2);

            for (let i = 0; i < nums.length; i++) {
                if (nums[i] <= mid) {
                    count++;                    
                }
            }

            if (count > mid) {
                answer = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }

            count = 0;
        }

        return answer;

    }

    function sumOfSetBits() {
        // O(n log n)

        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
            
        }

        let bitLength = 0;
        while (max > 0) {
            bitLength++;
            max = Math.floor(max / 2);

        }

        let duplicate = 0;
        let baseCount = 0;
        let numsCount = 0;
        for (let bit = 0; bit < bitLength; bit++) {
            for (let i = 1; i < nums.length; i++) {
                if (i & (1 << bit)) {
                    baseCount++;

                }
                
            }

            for (let j = 0; j < nums.length; j++) {
                if (nums[j] & (1 << bit)) {
                    numsCount++;

                }
                
            }

            if ((numsCount - baseCount) > 0) {
                duplicate |= (1 << bit);

            }

            baseCount = 0;
            numsCount = 0;
            
        }

        return duplicate;

    }

    function cycleDetection() {
        // Using the Floyd's Algorithm we can solve the problem in O(n)
        
        let tortoise = nums[0];
        let hare = nums[0];

        do {
            tortoise = nums[tortoise];
            hare = nums[nums[hare]];

        } while (tortoise != hare);

        tortoise = nums[0];

        while (tortoise != hare) {
            tortoise = nums[tortoise];
            hare = nums[hare];

        }

        return hare;

    }

    return cycleDetection();

};





