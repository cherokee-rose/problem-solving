/* 
    github.com/cherokee-rose

    Given an integer array nums, return true if any value appears at least twice in the array, 
    and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let freqTable = {};
    let result = false;

    for (let i = 0; i < nums.length; i++) {
        if (freqTable[nums[i]] != undefined) {
            result = true;
            break;

        } else {
            freqTable[nums[i]] = true;

        }
        
    }

    return result;
};  