/*
  https://github.com/cherokee-rose
  https://leetcode.com/problems/get-maximum-in-generated-array/

  You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:
    nums[0] = 0
    nums[1] = 1
    nums[2 * i] = nums[i] when 2 <= 2 * i <= n
    nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
    Return the maximum integer in the array nums​​​.

  Constraints:
   * 0 <= n <= 100
*/

function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let maxGen: number = 1;
  let nums: number[] = new Array(n + 1);
  nums[0] = 0;
  nums[1] = 1;

  for (let i = 1; i <= Math.floor(n / 2); i += 1) {
    nums[i * 2] = nums[i];

    if (i * 2 + 1 <= n) {
      nums[i * 2 + 1] = nums[i] + nums[i + 1];
      maxGen = Math.max(maxGen, nums[i * 2 + 1]);
    }
  }

  return maxGen;
}
