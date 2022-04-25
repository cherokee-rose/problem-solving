/* 
    https://leetcode.com/problems/excel-sheet-column-number/
    github.com/cherokee-rose

    Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

    For example:
        A -> 1
        B -> 2
        C -> 3
        ...
        Z -> 26
        AA -> 27
        AB -> 28 
        ...
    
    Example 1:
        Input: columnTitle = "A"
        Output: 1

    Example 2:
        Input: columnTitle = "AB"
        Output: 28

    Example 3:
        Input: columnTitle = "ZY"
        Output: 701
        
    Constraints:
        * 1 <= columnTitle.length <= 7
        * columnTitle consists only of uppercase English letters.
        * columnTitle is in the range ["A", "FXSHRXW"].
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let getCode = (letter) => letter.charCodeAt(0) - 64;
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        result += getCode(columnTitle.charAt(i)) * 26 ** (columnTitle.length - i - 1);
        
    }

    return result;

};

