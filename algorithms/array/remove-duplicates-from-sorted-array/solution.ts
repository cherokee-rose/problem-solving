/* 
    https://leetcode.com/problems/remove-duplicates-from-sorted-array/
    https://github.com/cherokee-rose

    Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each 
    unique element appears only once. The relative order of the elements should be kept the same.
    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed 
    in the first part of the array nums. More formally, if there are k elements after removing the duplicates, 
    then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.
    Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Example:
        Input: nums = [1,1,2]
        Output: 2, nums = [1,2,_]
        Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
        It does not matter what you leave beyond the returned k (hence they are underscores).
    
    Constraints:
        * 0 <= nums.length <= 3 * 10^4
        * -100 <= nums[i] <= 100
        * nums is sorted in non-decreasing order.
*/

function removeDuplicates(nums: number[]): number {
    let k = 0;
    let j = 0;

    while (j < nums.length) {
        while (j < nums.length && nums[k] === nums[j]) {
            j += 1;
        }

        if (j < nums.length) {
            nums[k + 1] = nums[j];
            k += 1;
            j += 1;
        }
    }

    return k + 1;
};

console.log(removeDuplicates([1,1,2,2]));
