/* 
    github.com/cherokee-rose
    Source: LeetCode  

    Given two binary strings a and b, return their sum as a binary string.

    Example 1:
        Input: a = "11", b = "1"
        Output: "100"

    Example 2:
        Input: a = "1010", b = "1011"
        Output: "10101"
 
    Constraints:
        * 1 <= a.length, b.length <= 104
        * a and b consist only of '0' or '1' characters.
        * Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    // Add leading zeroes to the shortest string
    if (a.length > b.length) {
        b = '0'.repeat(a.length - b.length) + b;
    } else if (b.length > a.length) {
        a = '0'.repeat(b.length - a.length) + a;
    }


    let result = '';
    let carry = 0;
    let sum = 0;
    // Start the addition
    for (let i = a.length - 1; i > -1; i--) {
        sum = Number(a[i]) + Number(b[i]) + carry;

        if (sum == 3) {
            result = '1' + result;
            carry = 1;
        } else if (sum == 2) {
            result = '0' + result;
            carry = 1;
        } else if (sum == 1){
            result = '1' + result;
            carry = 0;
        } else {
            result = '0' + result;
        }
    }

    if (carry == 1) {
        result = '1' + result;
    }

    return result;
};


console.log(addBinary('1010', '1011'));


