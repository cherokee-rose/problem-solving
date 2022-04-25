/* 
    github.com/cherokee-rose
    https://leetcode.com/problems/plus-one/

    You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
    The digits are ordered from most significant to least significant in left-to-right order. 
    The large integer does not contain any leading 0's.

    Increment the large integer by one and return the resulting array of digits.

    Example:
        Input: digits = [1,2,3]
        Output: [1,2,4]
        Explanation: The array represents the integer 123.
        Incrementing by one gives 123 + 1 = 124.
        Thus, the result should be [1,2,4].

    Constraints:
        * 1 <= digits.length <= 100
        * 0 <= digits[i] <= 9
        * digits does not contain any leading 0's.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let carry = 1;
    let result = [];
    let i = digits.length - 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry == 0) {
            result = digits.slice(0, i + 1).concat(result);
            break;

        }

        result.unshift((digits[i] + carry) % 10);
        carry = Math.floor((digits[i] + carry) / 10);
        
    }

    if (carry != 0) {
        result.unshift(carry);
        
    }

    return result;
    
};
