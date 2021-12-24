/* 
    github.com/cherokee-rose

    Given an integer array nums of unique elements, return all possible subsets (the power set).
    The solution set must not contain duplicate subsets. Return the solution in any order.

    Example 1:
        Input: nums = [1,2,3]
        Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

    Example 2:
        Input: nums = [0]
        Output: [[],[0]]
    
    Constraints:
        * 1 <= nums.length <= 10
        * -10 <= nums[i] <= 10
        * All the numbers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let globalResult = [[]];
    
    function findSubsets(localResult, start) {
        if (start == nums.length) {
            return;

        }

        
        for (let i = start; i < nums.length; i++) {
            localResult.push(nums[i]);
            findSubsets(localResult, i + 1);
            globalResult.push([].concat(localResult));
            localResult.pop();

        }

    }

    findSubsets([], 0);

    return globalResult;
    
};

