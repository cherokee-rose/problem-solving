/* 
  https://github.com/cherokee-rose
  https://leetcode.com/problems/longest-increasing-subsequence/

  Given an integer array nums, return the length of the longest strictly increasing subsequence.
  A subsequence is a sequence that can be derived from an array by deleting some or no elements 
  without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

  Example 1:
    Input: nums = [10,9,2,5,3,7,101,18]
    Output: 4
    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
    Example 2:

    Input: nums = [0,1,0,3,2,3]
    Output: 4

  Example 3:
    Input: nums = [7,7,7,7,7,7,7]
    Output: 1    

  Constraints:
    * 1 <= nums.length <= 2500
    * -10^4 <= nums[i] <= 10^4
*/

function lengthOfLIS(nums: number[]): number {
    let currSub = [nums.slice(-1)[0]]; // store a current subsequence
    let dp = [Array.from(currSub)]; // store all subsequences
    let currMaxLen = 1; // store the length of the longest subsequence
   
    for (let i = nums.length - 2; i >= 0; i -= 1) {
      // Look for a longest subsequence that has the last element
      // less than the current element nums[i]
      let longest = -1;
      for (let j = 0; j < dp.length; j += 1) {
       if (dp[j].slice(-1)[0] > nums[i]) {
         if (longest === -1) {
           longest = j;
         } else {
           longest = dp[j].length > dp[longest].length ? j : longest;
         }
       }
      }
        
      currSub = longest === -1? [] : Array.from(dp[longest]);    
      currSub.push(nums[i]);
      dp.push(Array.from(currSub));
      currMaxLen = Math.max(currMaxLen, currSub.length);
    }
       
    return currMaxLen;
   };

