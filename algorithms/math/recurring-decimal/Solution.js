/*
    https://leetcode.com/problems/fraction-to-recurring-decimal/    
    https://github.com/cherokee-rose

    Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
    If the fractional part is repeating, enclose the repeating part in parentheses.
    If multiple answers are possible, return any of them.
    It is guaranteed that the length of the answer string is less than 10^4 for all the given inputs.

    Example 1:
        Input: numerator = 1, denominator = 2
        Output: "0.5"

    Example 2:
        Input: numerator = 2, denominator = 1
        Output: "2"

    Example 3:
        Input: numerator = 4, denominator = 333
        Output: "0.(012)"
    
    Constraints:
        * -2^31 <= numerator, denominator <= 2^31 - 1
        * denominator != 0
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
 var fractionToDecimal = function(numerator, denominator) {
    // Check if the numerator is divisible by the denominator
    if (numerator % denominator == 0) {
        return (numerator / denominator).toString();
    }

    // Determine the sign
    let sign = (numerator ^ denominator) < 0 ? '-' : '';

    // Make the numbers positive
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    // Take the integer part
    let wholePart = Math.trunc(numerator / denominator).toString();
    let decimalPart = '';
    
    let working = (numerator % denominator) * 10;
    let remainders = {[working / 10]: 0};

    // Work-out the decimal part
    while (working != 0) {
        decimalPart += (Math.trunc(working / denominator)).toString();
        working = (working % denominator) * 10;

        if (remainders[working / 10] != undefined) {
            let index = remainders[working / 10];
            decimalPart = decimalPart.slice(0, index) + '(' + decimalPart.slice(index, decimalPart.length) + ')';
            break;
        }

        remainders[working / 10] = decimalPart.length;
    }

    return sign + wholePart + '.' + decimalPart;
};
