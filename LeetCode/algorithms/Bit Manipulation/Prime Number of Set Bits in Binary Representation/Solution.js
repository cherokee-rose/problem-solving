/* 
    github.com/cherokee-rose

    Given two integers left and right, return the count of numbers in the inclusive range [left, right] 
    having a prime number of set bits in their binary representation.

    Recall that the number of set bits an integer has is the number of 1's present when written in binary.
    For example, 21 written in binary is 10101, which has 3 set bits.
 
    Example 1:
        Input: left = 6, right = 10
        Output: 4
        Explanation:
        6  -> 110 (2 set bits, 2 is prime)
        7  -> 111 (3 set bits, 3 is prime)
        8  -> 1000 (1 set bit, 1 is not prime)
        9  -> 1001 (2 set bits, 2 is prime)
        10 -> 1010 (2 set bits, 2 is prime)
        4 numbers have a prime number of set bits.

    Constraints:
        * 1 <= left <= right <= 10^6
        * 0 <= right - left <= 10^4
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    let primeCount = 0; // stores the result
    let bitCount = 0; // stores the number of bits of each number

    for (let i = left; i <= right; i++) {
        // Count the number of bits
        for (let j = 0; j < 32; j++) {
            bitCount += ((i >> j) & 1);        
            
        }
        
        // Check if it's prime
        if (isPrime(bitCount)) {
            primeCount++;
        }

        bitCount = 0; // Reset the counter
    }

    return primeCount;
};


function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    
    let result = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            result = false;
            break;

        }
        
    }

    return result;
}

console.log(countPrimeSetBits(10, 15));