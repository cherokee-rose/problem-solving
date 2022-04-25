/*
    github.com/cherokee-rose

    A binary watch has 4 LEDs on the top which represent the hours (0-11), 
    and the 6 LEDs on the bottom represent the minutes (0-59). 
    Each LED represents a zero or one, with the least significant bit on the right.

    Given an integer turnedOn which represents the number of LEDs that are currently on, 
    return all possible times the watch could represent. You may return the answer in any order.

    The hour must not contain a leading zero.
        * For example, "01:00" is not valid. It should be "1:00".

    The minute must be consist of two digits and may contain a leading zero.
        * For example, "10:2" is not valid. It should be "10:02".


    Example 1:
        Input: turnedOn = 1
        Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

    Example 2:
        Input: turnedOn = 9
        Output: []
        
    Constraints:
        * 0 <= turnedOn <= 10

*/

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
 var readBinaryWatch = function(turnedOn) {
    let result = [];
    
    // We don't have to look for combinations, if the number of 
    // available spaces is 0 or less
    if (turnedOn < 9) {
        let hours = []; // stores the combinations of hours
        let minutes = []; // stores the combinations of minutes

        // Iterate until the max number of available spaces
        // for hours becomes 1 or until the total number available
        // spaces, whichever comes first.
        for (let i = 0; i < 4 && i <= turnedOn; i++) {
            // Look for combinations, only if the number of available spaces
            // for minutes is less than 6
            if (turnedOn - i < 6) {
                findCombinations(i, 4, 0, 11, hours); // for hours
                findCombinations(turnedOn - i, 6, 0, 59, minutes); // for minutes
                combine(hours, minutes, result); // combinations of both
                
                // Clean-up
                hours.splice(0); 
                minutes.splice(0);
            }

        }
    } 

    return result;
};


/**
 * Recursive function that search for all possible combinations with the given parameters.
 * 
 * @param maxSetBits - number of available spaces
 * @param maxBits - total length of bits
 * @param bitSum - current combination of bits
 * @param maxSum - upper-bound for a combination
 * @param combinations - storage for combinations
 */
function findCombinations(maxSetBits, maxBits, bitSum, maxSum, combinations) {
    // Termination point
    if (maxSetBits == 0) {
        // Check for repetition
        if (!Array.prototype.includes.call(combinations, bitSum)) {
            combinations.push(bitSum);
        }
        
        return;
    }

    for (let i = 0; i < maxBits; i++) {
        // Check if the current bit doesn't overlap with the bit
        // in the current combination, also check if the sum of the 
        // current combination and the current bit is less than or 
        // equal to the upper-bound
        if ((bitSum & (1 << i)) == 0 && (bitSum + (1 << i)) <= maxSum) {
            bitSum += (1 << i); // Add the bit

            findCombinations(maxSetBits - 1, maxBits, bitSum, maxSum, combinations);
            bitSum -= (1 << i); // Remove the bit
        }        
    }
}


/**
 * Combines all minutes with every hour.
 */
function combine(hours, minutes, combinations) {
    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < minutes.length; j++) {
            combinations.push(hours[i] + ':' + '0'.repeat(2 - minutes[j].toString().length) + minutes[j]);
            
        }
    }
}
