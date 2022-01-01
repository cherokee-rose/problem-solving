/* 
    github.com/cherokee-rose
    https://leetcode.com/problems/happy-number/

    A happy number is a number defined by the following process:
        * Starting with any positive integer, replace the number by the sum of the squares of its digits.
        * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
        * Those numbers for which this process ends in 1 are happy. 
    Return true if n is a happy number, and false if not.

    Example:
        Input: n = 19
        Output: true
        Explanation:
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1

    Constraints:
        * 1 <= n <= 2^31 - 1

*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let results = {};
    let result = n;

    while (true) {
        result = getNext(result);

        if (result == 1) {
            return true;

        } else if (results[result]) {
            return false;

        } else {
            results[result] = true;

        }

    }

    function getNext(num) {
        let totalSum = 0;
        while(num > 0) {
            totalSum += (num % 10) ** 2;
            num = Math.floor(num / 10);

        }

        return totalSum;

    }
};

