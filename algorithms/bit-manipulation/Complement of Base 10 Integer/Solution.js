/* 
    github.com/cherokee-rose

    The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its 
    binary representation.

    For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
    Given an integer n, return its complement.

    Constraints:
        * 0 <= n < 10^9
*/

/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    if (n == 0) {
        return 1;
    }

    return (2 ** (Math.ceil(Math.log2(n + 1))) - 1) ^ n;
};

console.log(bitwiseComplement(0));