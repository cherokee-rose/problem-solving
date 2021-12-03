/* 
    github.com/cherokee-rose
    Source: LeetCode    

    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

    For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, 
    which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
    Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
    The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    * I can be placed before V (5) and X (10) to make 4 and 9. 
    * X can be placed before L (50) and C (100) to make 40 and 90. 
    * C can be placed before D (500) and M (1000) to make 400 and 900.
    * Given an integer, convert it to a roman numeral.

    Example 1:
        Input: num = 3
        Output: "III"

    Example 2:
        Input: num = 4
        Output: "IV"

    Example 3:
        Input: num = 9
        Output: "IX"
        
    Example 4:
        Input: num = 58
        Output: "LVIII"
        Explanation: L = 50, V = 5, III = 3.

    Example 5:
        Input: num = 1994
        Output: "MCMXCIV"
        Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
    Constraints:
        * 1 <= num <= 3999
*/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let romanStr = '';
    let factor = 0;

    // Thousands
    factor = Math.floor(num / 1000);
    romanStr += 'M'.repeat(factor);

    num -= factor * 1000;

    // Hundreds
    factor = Math.floor(num / 100) % 10;

    if (factor == 9) {
        romanStr += 'CM';
    } else if (factor >= 5) {
        romanStr += 'D' + 'C'.repeat(factor - 5);
    } else if (factor == 4) {
        romanStr += 'CD';
    } else {
        romanStr += 'C'.repeat(factor);
    }

    num -= factor * 100;

    // Tenths
    factor = Math.floor(num / 10) % 10;    

    if (factor == 9) {
        romanStr += 'XC';
    } else if (factor >= 5) {
        romanStr += 'L' + 'X'.repeat(factor - 5);
    } else if (factor == 4) {
        romanStr += 'XL';
    } else {
        romanStr += 'X'.repeat(factor);
    }

    num -= factor * 10;

    // Ones
    factor = num;

    if (factor == 9) {
        romanStr += 'IX';
    } else if (factor >= 5) {
        romanStr += 'V' + 'I'.repeat(factor - 5);
    } else if (factor == 4) {
        romanStr += 'IV';
    } else {
        romanStr += 'I'.repeat(factor);
    }

    return romanStr;
}; 

