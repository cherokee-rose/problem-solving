/* 
    github.com/cherokee-rose

    Given two integers a and b, return the sum of the two integers without using the operators + and -.

    Example 1:
        Input: a = 1, b = 2
        Output: 3
        
    Example 2:
        Input: a = 2, b = 3
        Output: 5
        
    Constraints:
        * -1000 <= a, b <= 1000
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    let [carryIn, carryOut, subResult, result, bitOfA, bitOfB] = Array(6).fill(0);
    for (let i = 0; i <= 31; i++) {
        bitOfA = (a & (1 << i)) ? 1 : 0;
        bitOfB = (b & (1 << i)) ? 1 : 0;

        subResult = bitOfA ^ bitOfB;
        carryOut = bitOfA & bitOfB;

        result |= (subResult ^ carryIn) << i;
        carryIn = carryOut | (subResult & (carryIn));

    }

    return result;
    
};
