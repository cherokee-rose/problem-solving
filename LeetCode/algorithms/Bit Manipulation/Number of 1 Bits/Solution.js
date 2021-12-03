/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let count = 0;
    let i = 0;

    while (n >>> i > 0 && i < 32) {
        count += (n >>> i) & 1;
        i++;
    }

    return count;
};