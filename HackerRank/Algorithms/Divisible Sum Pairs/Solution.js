/* 
    github.com/cherokee-rose

    Source: HackerRank
    Problem:
            Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and
            ar[i] + ar[j] is divisible by k.
    
    Example:
            ar = [1, 2, 3, 4, 5]
            k = 5
            
            Three pairs meet the criteria: [1, 4], [2, 3], and [4, 6].

    Function Description:
            * int n: the length of array 
            * int ar[n]: an array of integers
            * int k: the integer divisor

    Returns:
            int: the number of pairs

    Constraints:
            * 2 <= n <= 100
            * 1 <= k <= 100
            * 1 <= ar[i] <= 100
            
    Performance:
            O(n)

*/

function divisibleSumPairs(n, k, ar) { 
    // 1. Initialize our frequency table where the index is 
    // the remainder which get you when you divide an element from the array by k
    // and the value is the number of such elements. => O(1)
    let freq = new Array(k);
    freq.fill(0); // freq = [0, 0, 0, ..., 0], freq.length = k

    // 2. Now run the loop to fill up our frequency table. => O(n)
    for (let i = 0; i < n; i++) {
        ++freq[ar[i] % k];
    }

    // For example: arr = [1, 3, 2, 6, 4, 5, 9] and k = 3
    // The frequency table for the array of elements would be:
    // arr[i] mode 3 == 0 : [3, 6, 9] => freq[0] = 3
    // arr[i] mode 3 == 1 : [1, 4] => freq[1] = 2
    // arr[i] mode 3 == 2 : [2, 5] => freq[2] = 2
     
    // 3. Calculate the number of unique pairs which you can get
    // using just the elements of the first index freq[0], since all the elements
    // of that index are divisible by k. You can calculate that based on the formula
    // n! / (r!(n - r)!), which is called "n choose r" or "Binomial coefficient".
    // Using our example above we can calculate the number of unique pairs for 
    // the first index: n = freq[0] = 3, r = 2 because a pair has 2 elements;
    // so the number of unique pairs at the first index is 3! / 2! (3 - 2)! =>
    // => 6 / 2 = 3. Check: freq[0] = [3, 6, 9] => [(3, 6), (3, 9), (6, 9)].
    // In fact we can even simplify our formula to n(n - 1) / 2, since 2! = 2 and
    // because of that n! becomes n(n - 1).
    let divPairsCount = freq[0] * (freq[0] - 1) / 2; // n * (n - 1) / 2 => O(1)

    // 4. The next step will be to calculate the number of unique pairs
    // based on the frequencies(number of elements of an index) of oppositely-equidistant
    // indices. Employing our example we can see that our frequency table look like this:
    // freq = [3, 2, 2] or freq = {0: 3, 1: 2, 2: 2}, but if you would look just at the indices,
    // it becomes {0, 1, 2}, since we've already calculated the number of unique pairs of the first index
    // we can get rid of it, so now it look like so {1, 2}. If you would add up those indices together it 
    // becomes 1 + 2 = 3 = k; now let's suppose k = 6 instead, so our indices would like this:
    // {1, 2, 3, 4, 5}. Do you see the pattern? 1 + 5 = 6 = 2 + 4 = 6 = k. So since each index represents
    // the remainder of ar[i] mod k, that means if we would add up an element of an index of one side with
    // an element of an index of the opposite side the result would be divisible by k. Knowing that we can
    // simply multiply the frequency(the number of elements) of an index of one side by the frequency of an 
    // index of the opposite side because on each element of one index we can take all the elements of the other index. 
    // Using our above example again: freq[1] = [1, 4] = 2, freq[2] = [2, 5] = 2 => 2 * 2 = 4. Check:
    // [(1, 2), (1, 5), (4, 2), (4, 5)].
    // O(k)
    for (let i = 1; i < k - i; i++) {
          divPairsCount += freq[i] * freq[k - i];  
    }

    // 5. The last step would be to check if the k is even, since we don't include the frequency
    // of the k / 2 index in our calculation if the k is even.
    // In that case we just need to calculate the number of unique pairs we can generate
    // using just the elements of k / 2 index, because if you would add up one element of that
    // index to the other the result will be divisible by k. We can easily calculate that
    // with the formula which we've used to calculate the number of unique pairs of the '0' index: n * (n - 1) / 2
    // O(1)
    if (k % 2 == 0) {
        divPairsCount += freq[k / 2] * (freq[k / 2] - 1) / 2;
    }    

    return divPairsCount;
}












