/*
  https://github.com/cherokee-rose
  https://leetcode.com/problems/product-of-array-except-self/

  Given an integer array nums, return an array answer such that answer[i] is equal to the 
  product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example 1:
   Input: nums = [1,2,3,4]
   Output: [24,12,8,6]

  Example 2: 
   Input: nums = [-1,1,0,-3,3]
   Output: [0,0,9,0,0]
 
  Constraints:
   * 2 <= nums.length <= 105
   * -30 <= nums[i] <= 30
   * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
  Follow up: Can you solve the problem in O(1) extra space complexity? 
  (The output array does not count as extra space for space complexity analysis.)
*/

/*
  The idea is to initialize an array of the size nums.length
  and filled with 1s. After that, go over the array from the start
  until the end and set each element as the product of the previous elements.
  
  Then, iterate one more time from the end until the start and update each element
  of the resulted array with the product of the elements which go after it.
*/
function productExceptSelf(nums: number[]): number[] {
  // No division operator
  // Time complexity: O(n)
  // Space complexity: O(1)

  let product = 1;
  let result = new Array(nums.length);

  // Modify from start to end
  for (let i = 0; i < nums.length; i += 1) {
    result[i] = product;
    product *= nums[i];
  }

  // Modify from end to start
  product = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
}
