/* 
    github.com/cherokee-rose
    https://leetcode.com/problems/climbing-stairs/

    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Example
        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps
        Example 2:

        Input: n = 3
        Output: 3
        Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step
        
    Constraints:
        * 1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let result = 0;
    let twoCount = 0;
    let fact = (num) => {
        if (num == 0) {
            return 1;

        }

        return num * fact(num - 1);
    }

    while ((n - twoCount * 2) >= 0) {
        result += fact(twoCount + (n - twoCount * 2)) / (fact(twoCount) * fact(n - twoCount * 2)); 
        twoCount++;

    }

    return result;

};

