/* 
    github.com/cherokee-rose

    Given a non-negative integer x, compute and return the square root of x.
    Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

    Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

    Constraints:
        * 0 <= x <= 2 ^ (231 - 1)

    Example 1:
        * Input: x = 4
        * Output: 2
        
    Example 2:
        * Input: x = 8
        * Output: 2
        * Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    /*
        The problem can be solved using Binary Search, hence the time complexity is O(log n).
        The steps are simple: 1) set the lower and upper bounds; 2) find the middle point between the 
        bounds; 3) multiply the midpoint by itself and round the result; 4) if the result is less than
        x, set the lower bound to the result, if the result is greater than the x, set the upper 
        bound to the result; 5) stop when the result is equal to x;
    */

    let lowerBound = 0;
    let upperBound = x;
    let midPoint = upperBound;
    
    while (Math.floor(midPoint * midPoint) != x) {
        midPoint = (lowerBound + upperBound) / 2;

        if (Math.floor(midPoint * midPoint) < x) {
            lowerBound = midPoint;
        } else if (Math.floor(midPoint * midPoint) > x) {
            upperBound = midPoint;
        }
    }

    return Math.floor(midPoint);
};
