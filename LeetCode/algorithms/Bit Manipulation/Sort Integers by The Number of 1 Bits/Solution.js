/*
    github.com/cherokee-rose

    Given an integer array arr. You have to sort the integers in the array in ascending order by 
    the number of 1's in their binary representation and in case of two or more integers have the 
    same number of 1's you have to sort them in ascending order.

    Return the sorted array.

    Example 1:
        Input: arr = [0,1,2,3,4,5,6,7,8]
        Output: [0,1,2,4,8,3,5,6,7]
        Explanation: [0] is the only integer with 0 bits.
        [1,2,4,8] all have 1 bit.
        [3,5,6] have 2 bits.
        [7] has 3 bits.
        The sorted array by bits is [0,1,2,4,8,3,5,6,7]

    Constraints:
        * 1 <= arr.length <= 500
        * 0 <= arr[i] <= 10^4
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    let sortedArr = arr;
    sortedArr.sort((a, b) => { 
        let diffCount = countBits(a) - countBits(b);
        
        return diffCount == 0 ? a - b : diffCount;
    });

    return sortedArr;
};


function countBits(n) {
    let count = 0;
    let result = n;

    while (result) {
        result = result & (result - 1);
        count++;
    }

    return count;
}

console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));