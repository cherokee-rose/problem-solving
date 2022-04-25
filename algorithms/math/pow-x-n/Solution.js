/*
    https://leetcode.com/problems/powx-n/
    https://github.com/cherokee-rose

    Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

    Example 1:
        Input: x = 2.00000, n = 10
        Output: 1024.00000

    Example 2:
        Input: x = 2.10000, n = 3
        Output: 9.26100

    Example 3:
        Input: x = 2.00000, n = -2
        Output: 0.25000
        Explanation: 2^(-2) = 1/2^2 = 1/4 = 0.25
        
    Constraints:
        * -100.0 < x < 100.0
        * -2^31 <= n <= 2^31-1
        * -10^4 <= x^n <= 10^4
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (Math.abs(x) == 1 || x == 0) {
        return x == -1 && n % 2 == 0 ? 1 : x;
    }
     
    let result = 1;
    let subResult;
    let pow = Math.abs(n);
    pow = Math.log2(pow) == 31 ? pow - 1 : pow;

    while (pow != 0) {
        subResult = x;
        for (let i = 0; i < Math.floor(Math.log2(pow)); i++) {
            subResult *= subResult;
            
        }

        result *= subResult;
        pow -= 1 << Math.floor(Math.log2(pow));        

    }

    return n < 0 ? 1 / result : result;

};