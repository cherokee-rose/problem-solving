/* 
    github.com/cherokee-rose

    You are given a string 'allowed' consisting of distinct characters and an array of strings 'words'. 
    A string is consistent if all characters in the string appear in the string 'allowed'.

    Return the number of consistent strings in the array words.

    Example 1:
        Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
        Output: 2
        Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

    Constraints:
        * 1 <= words.length <= 10^4
        * 1 <= allowed.length <= 26
        * 1 <= words[i].length <= 10
        * The characters in allowed are distinct.
        * words[i] and allowed contain only lowercase English letters.
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let charTable = {};
    for (let i = 0; i < allowed.length; i++) {
        charTable[allowed.charAt(i)] = true;
      
    }

    let strCount = 0;
    let wordChar = 0;
    for (let i = 0; i < words.length; i++) {
        strCount++;

        for (let j = 0; j < words[i].length; j++) {
            wordChar = words[i].charAt(j);

            if (charTable[wordChar] == undefined) {
                strCount--;
                break;
            }
        }
    }

    return strCount;
};
