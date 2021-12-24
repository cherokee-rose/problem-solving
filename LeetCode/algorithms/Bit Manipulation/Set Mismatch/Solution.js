/* 
    github.com/cherokee-rose

    You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, 
    one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss 
    of another number.

    You are given an integer array nums representing the data status of this set after the error.
    Find the number that occurs twice and the number that is missing and return them in the form of an array.

    Example 1:
        Input: nums = [1,2,2,4]
        Output: [2,3]

    Example 2:
        Input: nums = [1,1]
        Output: [1,2]
        
    Constraints:
       * 2 <= nums.length <= 10^4
       * 1 <= nums[i] <= 10^4
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let freq = new Array(nums.length);
    freq.fill(0);

    let duplicate = errorSum = 0;
    let lost;
    
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i] - 1]++;
        errorSum += nums[i];

        if (freq[nums[i] - 1] == 2) {
            duplicate = nums[i - 1];
        }
    }

    lost = (nums.length * (nums.length + 1) / 2) - (errorSum - duplicate);

    return [duplicate, lost];
 }
