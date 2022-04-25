/* 
    https://leetcode.com/problems/rotate-array/
    https://github.com/cherokee-rose

    Given an integer n, return the number of prime numbers that are strictly less than n.

    Example 1:
        Input: n = 10
        Output: 4
        Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

    Example 2:
        Input: n = 0
        Output: 0

    Example 3:
        Input: n = 1
        Output: 0

    Constraints:
        * 0 <= n <= 5 * 106
*/
function countPrimes(n: number): number {
    /*
        Eratosthenes's technique:
            Begin with 2, because 2 is prime, cross-out all numbers that are multiple of 2.
            Those numbers aren't primes. Then, cross-out all numbers that are multiple of 3.
            Continue crossing-out all numbers that are multiple of primes.
    */

    if (n <= 2) {
        return 0;
    }

    let primes: boolean[] = new Array(n + 1);
    primes.fill(true);
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = 2; j <= n / i; j++) {
                primes[i * j] = false;
            }
        }   
    }
    
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
        }
        
    }

    return count;
};
