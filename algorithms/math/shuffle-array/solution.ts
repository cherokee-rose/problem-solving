/*
    https://leetcode.com/problems/shuffle-an-array/
    https://github.com/cherokee-rose

    Given an integer array nums, design an algorithm to randomly shuffle the array. 
    All permutations of the array should be equally likely as a result of the shuffling.

    Implement the Solution class:
        * Solution(int[] nums) Initializes the object with the integer array nums.
        * int[] reset() Resets the array to its original configuration and returns it.
        * int[] shuffle() Returns a random shuffling of the array.

    Example:
        Input
        ["Solution", "shuffle", "reset", "shuffle"]
        [[[1, 2, 3]], [], [], []]
        Output
        [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

        Explanation
        Solution solution = new Solution([1, 2, 3]);
        solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                               // Any permutation of [1,2,3] must be equally likely to be returned.
                               // Example: return [3, 1, 2]
        solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
        solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

    Constraints:
        * 1 <= nums.length <= 200
        * -10^6 <= nums[i] <= 10^6
        * All the elements of nums are unique.
        * At most 5 * 10^4 calls in total will be made to reset and shuffle.
*/

class Solution {
    private original: number[];
    private copy: number[];

    constructor(nums: number[]) {
      this.original = nums;
      this.copy = Array.from(nums);
    }

    reset(): number[] {
      this.copy = Array.from(this.original);
      return this.copy;
    }

    shuffle(): number[] {
      let newIndex: number = 0;
      let length = this.original.length;
      this.reset();
        
      for (let i = 0; i < length - 1; i += 1) {
        newIndex = i + Math.floor(Math.random() * (length - i));    
        
        if (newIndex === i) {
            continue;
        }
          
        this.copy[newIndex] ^= this.copy[i];
        this.copy[i] ^= this.copy[newIndex];
        this.copy[newIndex] ^= this.copy[i];
        
      }

      return this.copy;
    }
}