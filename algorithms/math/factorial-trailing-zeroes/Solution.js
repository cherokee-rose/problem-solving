/*
    https://leetcode.com/problems/factorial-trailing-zeroes/
    https://github.com/cherokee-rose

    Given an integer n, return the number of trailing zeroes in n!.

    Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.    

    Example 1:
        Input: n = 3
        Output: 0
        Explanation: 3! = 6, no trailing zero.

    Example 2:
        Input: n = 5
        Output: 1
        Explanation: 5! = 120, one trailing zero.

    Example 3:
        Input: n = 0
        Output: 0
        
    Constraints:
        * 0 <= n <= 10^4  

    Follow up: Could you write a solution that works in logarithmic time complexity?
*/

/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    /**
     * Explanation: in order for a number to have a trailing zero, it has to be multiple of 10 -
     * 1 * 10 = 10, 2 * 10 = 20, 3 * 10, ..., but 10 itself is 2 * 5, so knowing that we can just count 5s in n!.
     * It's obvious that we can just divide n by 5, but the result won't give the exact number of zeroes because there can be
     * some numbers that have more than one 5 as its factors, for example, 25 = 5 * 5, 50 = 2 * 5 * 5, ...; in order to count
     * all zeroes we need to keep dividing n by 5^i, so the solution is O(log n) time-complexity.
     */

    let zeroCount = 0;
    let i = 1;
    
    while (5 ** i <= n) {
        zeroCount += Math.floor(n / 5 ** i);
        i++;

    }

    return zeroCount;

};
