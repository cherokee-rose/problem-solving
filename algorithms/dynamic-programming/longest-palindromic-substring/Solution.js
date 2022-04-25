/*
    github.com/cherokee-rose
    Source: LeetCode

    Problem:
        Given a string s, return the longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: "bab"
        Note: "aba" is also a valid answer.

    Example 2:
        Input: s = "cbbd"
        Output: "bb"

    Example 3:
        Input: s = "a"
        Output: "a"

    Example 4:
        Input: s = "ac"
        Output: "a"

    Constraints:
        * 1 <= s.length <= 1000
        * s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {  
    let currentLongest = s.slice(0, 1);
    let currentStr = '';
    
    for (let i = 0; i <= s.length - currentLongest.length; i++) {
        for (let j = i + currentLongest.length; j <= s.length; j++){
            currentStr = s.slice(i, j);
            if (isPalindrome(currentStr) && currentStr.length > currentLongest.length) {
                currentLongest = currentStr;
            }
           
        }
    }

    return currentLongest;
};

function isPalindrome(str) {
    let isPalindromic = true;

    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) != str.charAt(str.length - i - 1)) {
            isPalindromic = false;
            break;
        }
    }

    return isPalindromic;
}

console.log(longestPalindrome('babad'));



