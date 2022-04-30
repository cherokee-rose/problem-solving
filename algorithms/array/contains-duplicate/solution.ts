/* 
  https://github.com/cherokee-rose
  https://leetcode.com/problems/contains-duplicate/
  
  Given an integer array nums, return true if any value appears at least twice in the array, 
  and return false if every element is distinct.

  Example 1:
    Input: nums = [1,2,3,1]
    Output: true

  Example 2:
    Input: nums = [1,2,3,4]
    Output: false

  Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
    
 Constraints:
    * 1 <= nums.length <= 105
    * -10^9 <= nums[i] <= 10^9
*/

function containsDuplicate(nums: number[]): boolean {
  let map: {[num: number]: boolean} = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (map[nums[i]]) { 
        return true; 
    }
    
    map[nums[i]] = true;
  }

  return false;
}
