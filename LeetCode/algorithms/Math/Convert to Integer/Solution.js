/*
    github.com/cherokee-rose

    Given a string such as "123" or "67", write a function to output the number represented by the string without using casting.
*/

function convertStr(strNumber) {  
    let result = 0;
    let targetStr = strNumber.charAt(0) == '-' ? strNumber.slice(1) : strNumber;

    for (let i = 0; i < targetStr.length; i++) {
        result += (getInt(targetStr.charAt(i)) * 10 ** (targetStr.length - i - 1));
    }

    return strNumber.charAt(0) == '-' ? ~result + 1 : result;
}

/**
 * @param {string} strInt - a single number of string-type
 * @returns {number} - a single number of number-type  
 */
function getInt(strInt) {
    let output = 0;
    
    if (strInt == '1') {
        output = 1;
    } else if (strInt == '2') {
        output = 2;
    } else if (strInt == '3') {
        output = 3;
    } else if (strInt == '4') {
        output = 4;
    } else if (strInt == '5') {
        output = 5;
    } else if (strInt == '6') {
        output = 6;
    } else if (strInt == '7') {
        output = 7;
    } else if (strInt == '8') {
        output = 8;
    } else if (strInt == '9'){
        output = 9;
    }

    return output;
}
