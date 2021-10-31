/*
    github.com/cherokee-rose

    Source: HackerRank

    Problem:
        Given an array of bird sightings where every element represents a bird type id, determine the id of the most 
        frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

    Example:
        arr = [1, 1, 2, 2, 3]
        There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

    Function Description:
        * int arr[n]: the types of birds sighted

    Constraints
        * 5 <= n <= 2 * 10^5
        * It is guaranteed that each type is 1, 2, 3, 4, or 5.

    Returns
        int: the lowest type id of the most frequently sighted birds
*/

function migratoryBirds(arr) {
    // Create an empty container and fill it up with 0s
    let freq = new Array(arr.length);
    freq.fill(0); // [0, 0, 0, ..., 0]
    
    // A variable to store an index with the biggest value
    let mostFreqId = 0;

    // Start iterating -- O(n)
    for (let i = 0; i < arr.length; i++) {
        // Grab an index and update its value
        let currentId = arr[i] - 1;
        ++freq[currentId];
        
        // 1. Determine if both indices have the same value, if so
        // pick the lowest index.
        // 2. Determine if the current index has the greater value, if that 
        // the case pick that index.
        if (freq[mostFreqId] == freq[currentId] && mostFreqId > currentId ||
            freq[currentId] > freq[mostFreqId]) {
            mostFreqId = currentId;
        }
    }

    return mostFreqId + 1;
}






