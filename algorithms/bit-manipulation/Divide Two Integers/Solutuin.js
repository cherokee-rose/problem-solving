/* 
    github.com/cherokee-rose
    Source: LeetCode

    Problem:
        Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
        The integer division should truncate toward zero, which means losing its fractional part. 
        For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

        Return the quotient after dividing dividend by divisor.

        Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: 
        [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the 
        quotient is strictly less than -231, then return -231. 

    Example 1:
        Input: dividend = 10, divisor = 3
        Output: 3
        Explanation: 10/3 = 3.33333.. which is truncated to 3.

    Example 2:
        Input: dividend = 7, divisor = -3
        Output: -2
        Explanation: 7/-3 = -2.33333.. which is truncated to -2.

    Example 3:
        Input: dividend = 0, divisor = 1
        Output: 0

    Example 4:
        Input: dividend = 1, divisor = 1
        Output: 1
 

    Constraints:
        * -2^31 <= dividend, divisor <= 2^31 - 1
        * divisor != 0
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) { 
    let isNegative = false;

    if ((dividend ^ divisor) < 0) {
        isNegative = true;
        
    }
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result;
    if (divisor == 1) {
        result = !isNegative && (dividend == 2 ** 31) ? dividend - 1 : dividend;
        
    } else if (dividend < divisor) {
        result = 0;

    } else {
        result = 2 ** (Math.log2(dividend) - Math.log2(divisor));
        result = (result - Math.floor(result)) < 0.9999999999 ? Math.floor(result) : Math.ceil(result);
    
    }

    return isNegative ? -result : result;
};






