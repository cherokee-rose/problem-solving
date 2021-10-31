/*
    github.com/cherokee-rose

    Source: HackerRank
    Problem: 
            Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
            Lily decides to share a contiguous segment of the bar selected such that:
              * The length of the segment matches Ron's birth month, and,
              * The sum of the integers on the squares is equal to his birth day.
              * Determine how many ways she can divide the chocolate.
 
    Function Description
        countValidSubarrs has the following parameter(s):
            * int targetArr[n]: the array of elements
            * int targetSum: the sum to which a subarray has to be equal to
            * int targetLength: the length to which a subarray's length has to be equal to

        Returns
            * int: the number of matched subarrays

    Explanation:
            The problem requires you to find the number of all subarrays in a given array, such that the sum of the elements
            in that subarray is equal to 'targetSum' and the length of that subarray is equal to 'targetLength'.

    Solution:
            Iterate through a given array and check each subarray against the given criteria.

*/


function countValidSubarrs(targetArr, targetSum, targetLength) {
    // A variable to store the number of valid arrays
    let subArrCount = 0;
    // A function to sum elements
    let reducer = (previous, current) => previous + current;

    // Start the iteration
    for (let i = 0; i <= targetArr.length - targetLength; i++) {
        // Grab the subarray and calculate the sum
        let subArr = targetArr.slice(i, i + targetLength);
        let subArrSum = subArr.reduce(reducer);

        // Check if the sum of all the elements inside the subarray is equal to to the target sum
        if (subArrSum === targetSum) {
            subArrCount++;
        }
    }

    return subArrCount;
}







