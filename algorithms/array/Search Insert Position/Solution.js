/* 
    github.com/cherokee-rose

    Given a sorted array of distinct integers and a target value, return the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if (target <= nums[0]) {
        return 0;

    } else if (target == nums[nums.length - 1]) {
        return nums.length - 1;

    } else if (target > nums[nums.length - 1]) {
        return nums.length;

    }

    let left = 0;
    let right = nums.length - 1;
    let pivot;

    while (left < right) {
        pivot = left + Math.floor((right - left) / 2);

        if (nums[pivot] == target) {
            return pivot;

        } else if (nums[pivot] > target) {
            right = pivot;

        } else if (nums[pivot] < target) {
            left = pivot + 1;

        }
    }
    
    return left;
};  