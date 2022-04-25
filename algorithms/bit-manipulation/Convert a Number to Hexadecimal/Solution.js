/* 
    github.com/cherokee-rose

    Given an integer num, return a string representing its hexadecimal representation. 
    For negative integers, two’s complement method is used.

    All the letters in the answer string should be lowercase characters, 
    and there should not be any leading zeros in the answer except for the zero itself.

    Note: You are not allowed to use any built-in library method to directly solve this problem.

    Example 1:
        Input: num = 26
        Output: "1a"

    Example 2:
        Input: num = -1
        Output: "ffffffff"
        
    Constraints:
        * -2^31 <= num <= 2^(31 - 1)
*/

/**
 * @param {number} num
 * @return {string}
 */
 var toHex = function(num) {
    let result = '';
    let hexNumbers = ['a', 'b', 'c', 'd', 'e', 'f'];
    let decimalSum = 0;

    for (let i = j = 0; (num >>> i) > 0 && i < 32; i++, j++) {
        decimalSum += (2 ** j) * ((num >>> i) & 1);
        
        if (j == 3) {
            if (decimalSum > 9) {
                result = hexNumbers[decimalSum - 9 - 1] + result;
            } else {
                result = decimalSum.toString() + result;
            }

            j = -1;
            decimalSum = 0;
        }
    }

    if (result == '') {
        result = decimalSum.toString();

    } else if (decimalSum != 0) {
        result = (decimalSum > 9 ? hexNumbers[decimalSum - 9 - 1] : decimalSum) + result;

    }

    return result;
};
