/* 
    github.com/cherokee-rose

    Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.
    Two 1's are adjacent if there are only 0's separating them (possibly no 0's). 
    The distance between two 1's is the absolute difference between their bit positions. 
    For example, the two 1's in "1001" have a distance of 3.

    Example 1:
        Input: n = 22
        Output: 2
        Explanation: 22 in binary is "10110".
        The first adjacent pair of 1's is "10110" with a distance of 2.
        The second adjacent pair of 1's is "10110" with a distance of 1.
        The answer is the largest of these two distances, which is 2.
        Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.

    Constraints:
        * 1 <= n <= 10^9
*/  

/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    let start = 0;
    let end = 1;
    let maxDistance = 0;

    while (n >> end) {
        if (n & (1 << end)) {
            if ((n & (1 << start))) {
                maxDistance = (end - start) > maxDistance ? end - start : maxDistance;
            }

            start = end;
        }

        end++;
    }

    return maxDistance;
};

